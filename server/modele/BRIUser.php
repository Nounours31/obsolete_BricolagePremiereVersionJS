<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of cUser
 *
 * @author PFS
 */
include_once './iBRIModel.php';
// include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBTableRole.php';


class BRIUser extends iBRIModel { 
    public function __construct() {
        parent::__construct();
    }
    
    public function __destruct() {
    }
    
    /**
     * Valide que le user identifier par nom - password exsite bien en base
     */
    public function validateUserFromIdNomPassword ($uid, $user, $password) {
        $dbUser = new DBTableUser();
        return $dbUser -> validateUserFromIdNomPassword ($uid, $user, $password);
    }

    /**
     * Valide que le user identifier par nom - password exsite bien en base
     * @return true ou false
     */
     public function validateUserFromIdAndPassword ($uid, $password) {
        $dbUser = new DBTableUser();
        return $dbUser -> validateUserFromIdNomPassword ($uid, null, $password);
    }
    
    public function validateUser ($userOrMail, $password) {
        $dbUser = new DBTableUser();
        return $dbUser -> validateUser ($userOrMail, $password);
    }

    public function getUserFromNameOrMailAtLogin ($userOrMail, $password) {
        $dbUser = new DBTableUser();
        return $dbUser -> getUserFromNameOrMailAtLogin ($userOrMail, $password);
    }
    
    public function isValidUser ($userCookie, $csrfCookie) {
        $dbUser = new DBTableUser();
         return $dbUser -> checkCSRF ($userCookie, $csrfCookie);
    }

    /**
     * A la premiere connexion definit un token de session et un CSRF
     */
    public function setCurrentUserByName ($user) {
        $dbUser = new DBTableUser();
        return $dbUser -> setCurrentUserByName ($user);
    }
    public function setCurrentUserById ($user) {
        $dbUser = new DBTableUser();
        return $dbUser -> setCurrentUserById ($user);
    }
    

    public function updateUser ($UserId, $arrayInfo) {
         $dbUser = new DBTableUser();
         return $dbUser -> updateUserFromArrayData ($UserId, $arrayInfo);

    }
    
    
    
    //---------------------------------------------------------
    // update csrf coofie from user
    //---------------------------------------------------------
    public function updateCSRFCookie ($userCookie) {
         $dbUser = new DBTableUser();
         return $dbUser -> updateCSRF ($userCookie);        
    }
    
    
    
    

}
