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
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRIError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRITools.php';


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
            $trace = new BRILogger();
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
    }
}