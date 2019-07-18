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
include_once './tools/BRIError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
// include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cModel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once($_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/API/Tools.php');


class BRISecurite {
    public function __construct() {
    }
    
    public function __destruct() {
    }
    
    public function lightCheck() {
        return BRIError::S_OK();
    }
    
    public function Check() {
        $iErr = $this -> isCookiesValid();
        if ($iErr -> FAILED()) {
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
        return $iErr;
    }
    
    public function isCookiesValid() {
        // ai je les cookies de cnx ?
        $status = FALSE;
        if (isset ($_COOKIE) && is_array($_COOKIE)) {
            $status = array_key_exists (BRIEnvt::COOKIE_LOGGING, $_COOKIE);
            $status = $status && array_key_exists (BRIEnvt::COOKIE_CSRF, $_COOKIE);
        }    
        if (!$status) {
            $err = new BRIError(101);
            $msg = "DEBUG ---- Pas d'info de connexion manque un cookie - ";
            $msg .= "Liste cookies: >>>".Tools::arrayToString($_COOKIE)."<<<";
            $msg .= " ## Recherche de [".BRIEnvt::COOKIE_LOGGING."] et de [".BRIEnvt::COOKIE_CSRF."]";               
            $err ->setMessage($msg);
            return $err;
        }
        
        $userCookie = $_COOKIE [BRIEnvt::COOKIE_LOGGING];
        $csrfCookie = $_COOKIE [BRIEnvt::COOKIE_CSRF];
        $user = new cUser();
        $rc = $user -> isValidUser ($userCookie, $csrfCookie); 
        if (BRIError::is_not_identical($rc, BRIError::S_OK())) {
            return $rc;
        }
        
        /*
        $csrf = $user -> updateCSRFCookie($userCookie);
        $this ->updateCSRFCookie($csrf[BRIEnvt::COOKIE_CSRF]);
        */
        return BRIError::S_OK();
    }
    
    public function updateCookies($usercook, $csrfcook) {
        if (strlen($usercook) == 0) {
            setcookie(BRIEnvt::COOKIE_LOGGING, "deleted", time()+1, "/");
        }
        else {
            setcookie(BRIEnvt::COOKIE_LOGGING, $usercook, time()+3600, "/");
        }

        if (strlen($csrfcook) == 0) {
            setcookie(BRIEnvt::COOKIE_CSRF, "deleted", time()+1, "/"); 
        }
        else {
            setcookie(BRIEnvt::COOKIE_CSRF,    $csrfcook, time()+3600, "/"); 
        }
    }

    public function updateCSRFCookie($csrfcook) {
        setcookie(BRIEnvt::COOKIE_CSRF,    $csrfcook, time()+3600, "/");        
    }

    public function clean () {
        $trace = new Traces();
        if (isset($_COOKIE)) {
            $user = new cUser();
            $userCookie = $_COOKIE [BRIEnvt::COOKIE_LOGGING];
            $csrfCookie = $_COOKIE [BRIEnvt::COOKIE_CSRF];
        
            if (isset ($userCookie) && isset ($csrfCookie)) {
                $user = new cUser();
                $rc = $user -> resetCookies ($userCookie, $csrfCookie); 
                $this -> updateCookies('', '');
                $trace->debugTab("Cookies apres reset 2", $_COOKIE);
            }
        }
    }
}
