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
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBTableUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBTableRole.php';


class BRIUser extends iBRIModel { 
    public function __construct() {
    }
    
    public function __destruct() {
    }
    
    /**
     * Valide que le user identifier par nom - password exsite bien en base
     * @param type $uid user
     * @param type $user
     * @param type $password
     * @return true ou false
     */
    public function validateUserFromIdNomPassword ($uid, $user, $password) {
        $dbUser = new DBTableUser();
        return $dbUser -> validateUserFromIdNomPassword ($uid, $user, $password);
    }

    /**
     * Valide que le user identifier par nom - password exsite bien en base
     * @param type $id
     * @param type $password
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
     * @param type $user
     * @return type
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
    
    // get all user info from cookie cnx
    public function getInfoUserLoged ($userCookie) {
         $dbUser = new DBTableUser();
         return $dbUser -> getInfoUser ($userCookie);
    }

    // get UID user from cookie cnx
    public function getUserId ($userCookie) {
         $info = $this -> getInfoUserLoged($userCookie);
         return $info['uid'];
    }
    
    
    
    public function getAllUsersPublicInfo () {
         $dbUser = new DBTableUser();
         return $dbUser -> getAllUsersPublicInfo ();
    }
    
    public function existAUserWithThisEmail ($eMail) {
         $dbUser = new DBTableUser();
         return $dbUser -> existAUserWithThisEmail ($eMail);
    }
    
    public function updatePassword ($user, $passwd) {
         $dbUser = new DBTableUser(); 
         return $dbUser -> updatePassword ($user, $passwd);
    }
    
    public function resetCookies ($c1, $c2) {
         $dbUser = new DBTableUser(); 
         return $dbUser -> resetCookies ($c1, $c2);
    }
    
    public function setCACI ($info) {
        $dbCACI = new DBUserCACI();
        return $dbCACI ->setCACI($info);
    }
    
    
    public function getEmail($userUid) {
         $dbUser = new DBTableUser(); 
         return $dbUser -> getEmail ($userUid);
    }
    
    public function getAdministrators() {
         $dbUser = new DBTableRole(); 
         return $dbUser -> getAdministrators ();
    }
    public function getAdminUser() {
         $dbUser = new DBTableRole(); 
         return $dbUser ->getAdminUser ();
    }
    public function getAdminMateriel() {
         $dbUser = new DBTableRole(); 
         return $dbUser -> getAdminMateriel ();
    }
    public function getAdminSortie() {
         $dbUser = new DBTableRole(); 
         return $dbUser -> getAdminSortie ();
    }
}
