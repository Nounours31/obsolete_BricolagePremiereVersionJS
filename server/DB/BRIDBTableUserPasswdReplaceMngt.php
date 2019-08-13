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
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/DB/BRIDBAccess.php';

class BRIDBTableUserPasswdReplaceMngt extends BRIDBAccess {
    
    public function __construct() {
        parent::__construct();
        $this -> _DBName = 'DBTableUserPasswdReplaceMngt';
        $this -> _logger -> prefix ($this -> _DBName);
    }

    public function __destruct() {
        parent::__destruct();
    }

    public function insertNouvelleDemande ($uid, $eMail) {
        $UUID = Tools::UUID();
        
        $sql = "insert into users_pwdmngt (";
        $sql .= "userid, datedemande, datefinvalidite, uidHTTPrequest, mail, utilise ";
        $sql .= ") values (";
        $sql .= $uid.",'".date("Y-m-d H:i:s")."','".date('Y-m-d H:i:s', strtotime('+15 minutes'))."','".$UUID."','".$eMail."',0)";                
        $rc = $this ->insertAsRest($sql);
        if ($rc === FALSE)
            return FALSE;
        return $UUID;
    }
    
    public function checkIdValide ($id) {
        $sql = "select id from users_pwdmngt where((utilise = 0) and (uidHTTPrequest = '$id') and (datefinvalidite > '".date("Y-m-d H:i:s")."') )";
        $rc = $this ->selectAsRest($sql);
        if (count($rc) < 1)
            return FALSE;
        return TRUE;        
    }
    
    public function valideId ($id) {
        $sql = "select userid from users_pwdmngt where((utilise = 0) and (uidHTTPrequest = '$id') and (datefinvalidite > '".date("Y-m-d H:i:s")."') )";
        $rc = $this ->selectAsRest($sql);
        if (count($rc) < 1)
            return -1;
        
        $userId = $rc[0]['userid'];
        $sql = "update users_pwdmngt set utilise = 1, consommed = '".date("Y-m-d H:i:s")."' where (uidHTTPrequest = '$id')";
        $rc = $this ->insertAsRest($sql);
        
        return $userId;
    }
}
