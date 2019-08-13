<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of cPasswordManagement
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/DB/DBTableUserPasswdReplaceMngt.php';
// include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cModel.php';

class cPasswordManagement { // extends cModel {
    public function __construct() {
    }
    public function __destruct() {
    }
    
    /**
     * Valide que le user identifier par nom - password exsite bien en base
     * @param type $user
     * @param type $password
     * @return true ou false
     */
    public function insertNouvelleDemande ($userId, $userMail) {
        $err = cError::S_OK();
        
        $repTable = new DBTableUserPasswdReplaceMngt();
        $rc = $repTable ->insertNouvelleDemande($userId, $userMail);
        return $rc;
    }
    
    public function checkIdValide ($id) {
        $repTable = new DBTableUserPasswdReplaceMngt();
        $rc = $repTable ->checkIdValide($id);
        return $rc;
    }

    public function valideId ($id) {
        $repTable = new DBTableUserPasswdReplaceMngt();
        $rc = $repTable ->valideId($id);
        return $rc;
    }
}
