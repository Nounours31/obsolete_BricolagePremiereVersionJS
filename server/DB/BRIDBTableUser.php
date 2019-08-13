<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * MUST NOT BE USE DIRECTLY
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Tools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/iDBAccess.php';

class DBTableUser extends iDBAccess {    
    public function __construct() {
        parent::__construct();
        $this -> _DBName = self::_DBNameUsers;
        $this -> _logger -> prefix ($this -> _DBName);
    }

    public function __destruct() {
        parent::__destruct();
    }

    // -----------------------------------------------------------------------------------------------------------------------------
    // Zone de creation
    // -----------------------------------------------------------------------------------------------------------------------------
    /**
     * ZOne
     * @param type $name
     * @param type $password
     * @param type $eMail
     * @return type
     */
    public function createUser ($infos) {
        $update = false;
        return $this -> createOrUpdateUser ($infos, $update);
    }
    public function updateUser ($infos) {
        $update = true;
        return $this -> createOrUpdateUser ($infos, $update);        
    }
    private function createOrUpdateUser ($infos, $update) {
        $ret = array();
        $log = array();
        $uid = -1;
        $motdepasse = Tools::UUID();
        $MD5Password = md5($motdepasse);

        // ----------------------------------------------
        // Le user existe il deja ? si ou je recup dson ID / sinon creation
        // ----------------------------------------------
        if ($update) {
            $sql = "select uid from ".self::_DBNameUsers." where (uid = '".$infos['uid']."')";
        }
        else {
            $sql = "select uid from ".self::_DBNameUsers." where ((nom = '".$infos['nom']."') and ((email = '".$infos['email']."') or (emailperso = '".$infos['emailperso']."')))";
        }
        $rc = $this -> selectAsRest($sql);
        if (!empty($rc)) {
            $uid = $rc [0]['uid'];
            $log['creation'] = 'KO user existe deja: '.$uid; 
            $ret['log'] = $log;
            if (!$update) {
                return $ret;
            }
        }
        else if ($update) {
            $log['creation'] = 'KO user ne existe pas '.$uid; 
            $ret['log'] = $log;
            if (!$update) {
                return $ret;
            }
        }
        else {
            $sql = "insert into ".self::_DBNameUsers;
            $sqlchamps = 'tokenId, csrftoken, token, dateinscription, passwdMD5';
            $sqlvaleurs = "'".date("Y-m-d H:i:s")."', '', '', '".date("Y-m-d H:i:s")."', '".$MD5Password."'";
            
            foreach ($infos as $key => $value) {
                $sqlchamps .= ','.$key;
                $sqlvaleurs .= ", '".$value."'";
            }
            $sql = $sql.' ('.$sqlchamps.') values ('.$sqlvaleurs.')';
            $rc = $this ->insertAsRest($sql);
            if ($rc !== FALSE) {
                $this ->_logger ->log('OK: User cree');
                $uid = $rc;
                $log['creation'] = 'OK: uid = '.$uid;             
            }
            else {
                $log['creation'] = 'KO: rc = '.$rc;
                return $log;
            }
        }
        $ret['log'] = $log;
        $ret['uid'] = $uid;
        return $ret;
    }
    
    
    public function getEmail($uid) {
        $sql = "select email, emailperso from ".self::_DBNameUsers." where (uid=".$uid.")";       
        $rc = $this ->selectAsRest($sql);

        $aRetour = array();
        if (isset($rc) && isset($rc[0])) {
            array_push($aRetour, $rc[0]['email']);
            array_push($aRetour, $rc[0]['emailperso']);
        }
        return $aRetour;
    }
    
    
    public function addUserNotif($aInfoNotif, $uid) {
        $sql = "delete from ".self::_DBNameUserNotifs." where (uiduser=".$uid.")";
        $this ->deleteAsRest($sql);
        
        $log = array();
        foreach ($aInfoNotif as $key => $value) {
            $sql = "insert into ".self::_DBNameUserNotifs." (uiduser, uidnotification) "
                    . "select ".$uid." as uiduser, uid as uidnotification from ".self::_DBNameNotif."  where (notification = '".$key."')";
           $rc = $this ->insertAsRest($sql);
           array_push($log, $rc);
        }        
        $ret = array();
        $ret['log'] = 'Insert fait';
        $ret['uid'] = $log;
        return $ret;
    }
    
    

    // -----------------------------------------------------------------------------------------------------------------------------
    // Zone de mise a jour
    // -----------------------------------------------------------------------------------------------------------------------------
        public function updateUserFromArrayData ($userId, $arrayAttr) {
        $sql = "update ".self::_DBNameUsers." set ";
        $first = true;
        foreach ($arrayAttr as $key => $value) {
            if ($first) {
                $first = false;
            }
            else {
                $sql .= ',';
            }
            $sql .= $key." = '".$value."'";
        }
        $sql .=  " where (uid = '".$userId."')";
         $this ->_logger ->debug($sql);
        
        $rc = $this -> updateAsRest($sql);
        if ($rc !== TRUE) {
            $err = cError::E_FAIL();
            $err->setMessage('incapable de mettre  ajour ce user '.$userId);
             $this ->_logger ->log('KO: Invalid user or passwd');
            return $err;
        }
        return cError::S_OK();
    }
    
    

    
    public function updatePassword ($user, $passwd)  {
        $sql = "update ".self::_DBNameUsers." set passwdMD5 = '".$passwd."' where (uid = ".$user.")";
        $rc = $this -> updateAsRest($sql);
        if ($rc !== TRUE) {
            $err = cError::E_FAIL();
            $err->setMessage('incapable de mettre  ajour ce user '.$userId);
             $this ->_logger ->log('KO: Invalid user or passwd');
            return $err;
        }
        return cError::S_OK();
    }


    public function setCurrentUserById ($id) {
        $token = Tools::UUID();
        $tokenCsrf = Tools::UUID();
        $sql = "update ".self::_DBNameUsers." set token = '".$token."', csrftoken = '".$tokenCsrf."', tokenId = '".date("Y-m-d H:i:s")."' where (uid = '".$id."')";        
        return $this -> setCurrentUser($sql, $token, $tokenCsrf);
    }
    
    public function setCurrentUserByName ($name) {
        $token = Tools::UUID();
        $tokenCsrf = Tools::UUID();
        $sql = "update ".self::_DBNameUsers." set token = '".$token."', csrftoken = '".$tokenCsrf."', tokenId = '".date("Y-m-d H:i:s")."' where (nom = '".$name."')";
        return $this -> setCurrentUser($sql, $token, $tokenCsrf);
    }
    
    private function setCurrentUser ($sql, $token, $tokenCsrf) {
        $rc = $this -> updateAsRest($sql);
        if ($rc !== TRUE) {
            $err = cError::E_FAIL();
            $err->setMessage('Invalid user or passwd');
             $this ->_logger ->log('KO: Invalid user or passwd');
            return $err;
        }
        $info = array();
        $info[ENVT::COOKIE_LOGGING] = $token;
        $info[ENVT::COOKIE_CSRF] = $tokenCsrf;
        return $info;
    }
    
        public function resetCookies ($c1, $c2) {
        $sql = "update ".self::_DBNameUsers." set csrftoken= 'logout demanded', token = 'logout demanded', tokenId = '".date("Y-m-d H:i:s")."' where (token = '".$c1."')";
        $rc = $this -> updateAsRest($sql);
        return TRUE;
    }    
    
    public function checkCSRF ($token, $tokenCsrf) {
        $sql = "select uid from ".self::_DBNameUsers." where ((token = '".$token."') and (csrftoken = '".$tokenCsrf."'))";
        $rc = $this -> selectAsRest($sql);
        if (empty($rc)) {
            $err = cError::E_FAIL();
            $msg = 'DEBUG .... '.$sql;
            $err->setMessage('Invalid user or passwd # sql KO # '.$msg);
             $this ->_logger ->log('KO: Invalid user or passwd');
            return $err;
        }
        $err = cError::S_OK();
        return $err;
    }

    public function updateCSRF ($token) {
        $tokenCsrf = uniqid();
        $sql = "update ".self::_DBNameUsers." set csrftoken = '".$tokenCsrf."' , tokenId = '".date("Y-m-d H:i:s")."' where (token = '".$token."')";
        $rc = $this -> updateAsRest($sql);
        if ($rc !== TRUE) {
            $err = cError::E_FAIL();
            $err->setMessage('Invalid user or passwd');
             $this ->_logger ->log('KO: Invalid user or passwd');
            return $err;
        }
        $info = array();
        $info[ENVT::COOKIE_LOGGING] = $token;
        $info[ENVT::COOKIE_CSRF] = $tokenCsrf;
        return $info;
    }

    //  -----------------------------------------------------------------------------------------------------------------------------
    // Zone de lecture
    // -----------------------------------------------------------------------------------------------------------------------------
    public function getInfoUser ($token = FALSE, $uid = FALSE) {
        $sql = "SELECT u.uid as uid, u.nom as nom, u.prenom as prenom, u.alias as alias, u.email as email, u.emailperso as emailperso, r.role as role "
             . "FROM  ".self::_DBNameUsers." u "
             . "LEFT JOIN ".self::_DBNameUserRole." as ur on (u.uid = ur.uiduser) "
             . "LEFT JOIN ".self::_DBNameRole." as r on (ur.uidrole = r.uid) ";
        
        if ($token == FALSE) {
            $sql .= "WHERE (u.uid = ".$uid.")";            
        }
        else {
            $sql .= "WHERE (u.token = '".$token."')";
        }
        $rc = $this -> selectAsRest($sql);
        if (empty($rc)) {
            $err = cError::E_FAIL();
            $err->setMessage('Invalid user or passwd');
            $this ->_logger ->log('KO: Invalid user or passwd');
            return $err;
        }
        $info = array();
        $info['uid'] = $rc[0]['uid'];
        $info['nom'] = $rc[0]['nom'];
        $info['prenom'] = $rc[0]['prenom'];
        $info['alias'] = $rc[0]['alias'];
        $info['email'] = $rc[0]['email'];
        $info['emailperso'] = $rc[0]['emailperso'];
        $info['role'] = "";
        
        $first = true;
        foreach ($rc as $value) {
            if ($first) $first = false;
            else $info['role'] .= ', ';
            $info['role'] .= $value['role'];
        }
        return $info;     
    }

        public function getAllUsersPublicInfo () {
        $sql = "SELECT u.uid as uid, u.nom as nom, u.prenom as prenom, u.alias as alias, r.role as role "
             . "FROM  ".self::_DBNameUsers." u "
             . "LEFT JOIN ".self::_DBNameUserRole." as ur on (u.uid = ur.uiduser) "
             . "LEFT JOIN ".self::_DBNameRole." as r on (ur.uidrole = r.uid) ";

        
        $rc = $this -> selectAsRest($sql);
        if (empty($rc)) {
            $err = cError::E_FAIL();
            $err->setMessage('Invalid user or passwd');
            $this ->_logger ->log('KO: Invalid user or passwd');
            return $err;
        }

        // -------------------------------------
        // attention il faut merger les roles
        // -------------------------------------
        $aMergerRole = array();
        foreach ($rc as $value) {
            if (!array_key_exists($value['uid'], $aMergerRole))
                    $aMergerRole[$value['uid']] = $value;
            else {
                 $aMergerRole[$value['uid']]['role'] .= (", ".$value['role']);
            }
        }
        
        $info = array();
        foreach ($aMergerRole as $valuewithRoles) {
            // -------------------------------------
            // attention il faut merger les roles
            array_push($info, $valuewithRoles);
        }
        return $info;
    }

    public function getUserPublicInfo ($uid) {
        $sql = "SELECT u.uid as uid, u.nom as nom, u.prenom as prenom, u.alias as alias "
             . "FROM  ".self::_DBNameUsers." u where (u.uid = ".$uid.")";
        $rc = $this -> selectAsRest($sql);
        if (empty($rc)) {
            $err = cError::E_FAIL();
            $err->setMessage('Invalid user or passwd');
            $this ->_logger ->log('KO: Invalid user or passwd');
            return $err;
        }
        
        $info = array();
        foreach ($rc as $value) {
            array_push($info, $value);
        }
        return $info;
    }

    //  -----------------------------------------------------------------------------------------------------------------------------
    // Zone de service
    // -----------------------------------------------------------------------------------------------------------------------------
    public function validateUserFromIdNomPassword ($uid, $name, $password) {
        $sql = "";
        if ($name == null) {
            $sql = "select uid from ".self::_DBNameUsers." where ((uid = ".$uid.") and (passwdMD5 = '".$password."'))";
        }
        else {
            $sql = "select uid from ".self::_DBNameUsers." where ((uid = ".$uid.") and (nom = '".$name."') and (passwdMD5 = '".$password."'))";            
        }
        $rc = $this -> selectAsRest($sql);
        if (empty($rc)) {
            $err = cError::E_FAIL();
            $err->setMessage('Invalid user or passwd');
             $this ->_logger -> debug('KO: Invalid user or passwd - validateUserFromIdNomPassword');
            return $err;
        }

        $err = cError::S_OK();
        return $err;
    }
    
    public function validateUser ($name, $password) {
        $sql = "select uid, nom from ".self::_DBNameUsers." where (((nom = '".$name."') or (email = '".$name."') or (emailperso = '".$name."')) and (passwdMD5 = '".$password."'))";
        $rc = $this -> selectAsRest($sql);
        if (empty($rc)) {
            $err = cError::E_FAIL();
            $err->setMessage('Invalid user or passwd');
             $this ->_logger ->log('KO: Invalid user or passwd');
            return $err;
        }
        $err = cError::S_OK();
        return $err;
    }

    public function getUserFromNameOrMailAtLogin ($name, $password) {
        $sql = "select uid, nom from ".self::_DBNameUsers." where (((nom = '".$name."') or (email = '".$name."') or (emailperso = '".$name."')) and (passwdMD5 = '".$password."'))";
        $rc = $this -> selectAsRest($sql);
        return $rc[0];
    }


        public function existAUserWithThisEmail ($eMail) {
        $sql = "SELECT u.uid as uid, u.email as eMail "
             . "FROM  ".self::_DBNameUsers." u where (u.email = '".$eMail."')";
        $rc = $this -> selectAsRest($sql);
        if (empty($rc)) {
            return false;
        }
        
        $info = array();
        foreach ($rc as $value) {
            array_push($info, $value);
        }
        return $info;
    }
}
