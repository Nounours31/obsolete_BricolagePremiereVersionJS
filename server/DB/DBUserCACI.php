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
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBFileManagement.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBTableUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/Model/cMailer.php';


class DBUserCACI extends iDBAccess {    
    public function __construct() {
        parent::__construct();
        $this -> _DBName = self::_DBUserCACI;
        $this -> _logger -> prefix ($this -> _DBName);
    }

    public function __destruct() {
        parent::__destruct();
    }

    public function updateCACI($info) {
        $this -> _logger -> debug ("Start setCACI");
        $retour = cError::S_OK();
        if (!isset($info['uid'])) {
            $retour -> setMessage("Pas d'UID defini impossible de modifier le CACI");
            return $retour;
        }

        $sql = 'update '.self::_DBUserCACI." set datevalidation = '".date("Y-m-d H:i:s")."'";
        foreach ($info as $key => $value) {
            if (strcmp ($key, "pathtoCACI") == 0) $sql .= (",pathtoCACI = '".$value."'");
            if (strcmp ($key, "uidvalidateur") == 0) $sql .= (",uidvalidateur = ".$value);
            if (strcmp ($key, "dateupload") == 0) $sql .= (",dateupload = '".$value."'");
            if (strcmp ($key, "datesignaturemedecin") == 0) $sql .= (",datesignaturemedecin = '".$value."', valide=1");
        }
        $sql .= ' where uid = '.$info['uid'];
 
            
        $this -> _logger -> debug ("SQL: ".$sql);
        $this ->updateAsRest($sql);
            
        $mailer = new cMailer;
        
        if (isset($info['uiduser'])) {
            $listUidUser = array();
            $user = new DBTableUser;
            $userAValider = $user -> getUserPublicInfo($info['uiduser']);
            $userAValiderAsString = $userAValider[0]['prenom'].' '.$userAValider[0]['nom'].'(uid:'.$userAValider[0]['uid'].'/'.$userAValider[0]['alias'].')';

            $userAdmin = new DBTableRole;
            $allAdmin = $userAdmin ->getAdminUser();
            $listUidUser = array();
            array_push($listUidUser, $userAValider[0]['uid']);
            foreach ($allAdmin as $value) {
               array_push ($listUidUser, $value); 
            }  
            $mailer->sendMailToMultipleUserUid($listUidUser, "CACI a ete valide", "Bonjour,<br/> Le CACI de ".$userAValiderAsString." a ete valide.</br>");
        }
        else {
            $mailer->sendMailToAdminUser ("CACI a ete valide", "Bonjour,<br/> Le CACI de ... a ete valide.</br>");
        }
        return cError::S_OK();
    }
        
    
    
    public function setCACI($info) {
        $this -> _logger -> debug ("Start setCACI");
        $retour = cError::S_OK();
        if (!isset($info['uid'])) {
            $retour -> setMessage("Pas d'UID defini impossible de modifier le CACI");
            return $retour;
        }
        
        if ((!isset($info['__FILES__'])) || (count ($info['__FILES__']) < 1)) {
            $retour -> setMessage("Pas de fichier");
            return $retour;
        }        
        
        $dbfmngt = new DBFileManagement;
        $mailer = new cMailer;
        $user = new DBTableUser;
        $userAValider = $user -> getUserPublicInfo($info['uid']);
        $this -> _logger -> debugTab ('User a valider: ', $userAValider);
        
        $userAValiderAsString = $userAValider[0]['prenom'].' '.$userAValider[0]['nom'].'(uid:'.$userAValider[0]['uid'].'/'.$userAValider[0]['alias'].')';
        
        foreach ($info['__FILES__'] as $key => $value) {
            $relativePath = $dbfmngt -> copyCACIOnServer($info['uid'], $value['name'], $value['absolute_path']);
            
            $sql = 'insert into '.self::_DBUserCACI.' (useruid, pathtoCACI, dateupload, datesignaturemedecin, valide, uidvalidateur, datevalidation) '
                    . 'values '
                    . "(".$info['uid'].", '".$relativePath."', '".date("Y-m-d H:i:s")."', NULL, 0, 0, NULL)";
            
            $this -> _logger -> debug ("SQL: ".$sql);
            $this ->insertAsRest($sql);
            
            
            $mailer ->sendMailToAdminUser("CACI a valider", "Bonjour Mr Admin user,<br/> Le CACI de ".$userAValiderAsString." est a valider.</br> Merci de le valider en te connectant au site, Menu utilisateur, onglet 'admin user'.");
        }
        return $retour;
    }
    
    
    public function getUserCACI($uid) {
        $this -> _logger -> debug ("Start setCACI");
        $retour = cError::S_OK();
            
        $sql = 'select * from '.self::_DBUserCACI.' where (useruid = '.$uid.')';
        $this -> _logger -> debug ("SQL: ".$sql);
        return $this ->selectAsRest($sql);
    }
}
