<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of cSecurite
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
// include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cModel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once($_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/API/Tools.php');


// class cSecurite extends cModel {
class cSecurite {
    public function __construct() {
        //parent::__construct();
    }
    
    public function __destruct() {
        //parent::__destruct();
    }
    


    public function Check() {
        $iErr = $this -> isCookiesValid();
        if (cError::is_not_identical($iErr, cError::S_OK())) {
            $trace = new Traces();
            $trace ->fatal("Impossible de se connecter : [err:".$iErr ->getErrorCode()."] = ".$iErr ->getMessage());
            
            $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http");
            $actual_link .= "://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
            $iPos = strpos($actual_link, "/php/services/", 0);    
            $trace ->fatal("iPos: ".$iPos);
            if ($iPos === FALSE) {
                $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http")."://".$_SERVER['HTTP_HOST'];
            }
            else {
                $actual_link = substr ($actual_link, 0, $iPos);
                $actual_link .= '/js/compteinvalide.html';
            }
            $trace ->fatal("Redirection vers: ".$actual_link);
            
            header('Location: '.$actual_link, true, 303);
            die();
            exit();
        }
    }
    
    public function isCookiesValid() {
        // ai je les cookies de cnx ?
        $status = FALSE;
        if (isset ($_COOKIE) && is_array($_COOKIE)) {
            $status = array_key_exists (ENVT::COOKIE_LOGGING, $_COOKIE);
            $status = $status && array_key_exists (ENVT::COOKIE_CSRF, $_COOKIE);
        }    
        if (!$status) {
            $err = new cError(101);
            $msg = "DEBUG ---- Pas d'info de connexion manque un cookie - ";
            $msg .= "Liste cookies: >>>".Tools::arrayToString($_COOKIE)."<<<";
            $msg .= " ## Recherche de [".ENVT::COOKIE_LOGGING."] et de [".ENVT::COOKIE_CSRF."]";               
            $err ->setMessage($msg);
            return $err;
        }
        
        $userCookie = $_COOKIE [ENVT::COOKIE_LOGGING];
        $csrfCookie = $_COOKIE [ENVT::COOKIE_CSRF];
        $user = new cUser();
        $rc = $user -> isValidUser ($userCookie, $csrfCookie); 
        if (cError::is_not_identical($rc, cError::S_OK())) {
            return $rc;
        }
        
        /*
        $csrf = $user -> updateCSRFCookie($userCookie);
        $this ->updateCSRFCookie($csrf[ENVT::COOKIE_CSRF]);
        */
        return cError::S_OK();
    }
    
    public function updateCookies($usercook, $csrfcook) {
        if (strlen($usercook) == 0) {
            setcookie(ENVT::COOKIE_LOGGING, "deleted", time()+1, "/");
        }
        else {
            setcookie(ENVT::COOKIE_LOGGING, $usercook, time()+3600, "/");
        }

        if (strlen($csrfcook) == 0) {
            setcookie(ENVT::COOKIE_CSRF, "deleted", time()+1, "/"); 
        }
        else {
            setcookie(ENVT::COOKIE_CSRF,    $csrfcook, time()+3600, "/"); 
        }
    }

    public function updateCSRFCookie($csrfcook) {
        setcookie(ENVT::COOKIE_CSRF,    $csrfcook, time()+3600, "/");        
    }

    public function clean () {
        $trace = new Traces();
        if (isset($_COOKIE)) {
            $user = new cUser();
            $userCookie = $_COOKIE [ENVT::COOKIE_LOGGING];
            $csrfCookie = $_COOKIE [ENVT::COOKIE_CSRF];
        
            if (isset ($userCookie) && isset ($csrfCookie)) {
                $user = new cUser();
                $rc = $user -> resetCookies ($userCookie, $csrfCookie); 
                $this -> updateCookies('', '');
                $trace->debugTab("Cookies apres reset 2", $_COOKIE);
            }
        }
    }
}
