<?php
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
ini_set('display_errors', 'on');


/**
 * Description of ENVT
 *
 * @author PFS
 */
class ENVT {
    const isLOCALSERVER = true;
    const SiteName = "NewPlouf/";
    const tracePATHTODISK = "logs/";
    const CACIPATHTODISK = "upload/CACI/";
    const traceFILE = "traces.log";
    const DEBUGtraceFILE = "E:/WS/GitHub/";

    // Debug Info
    const _DEBUG = 10;
    const _INFO = 50;
    const _FATAL = 99;
    const _DEBUGLEVEL = Self::_DEBUG;

    // DB Cnx
    const DBUser = "root"; /*"cedssectbrico";*/
    const DBPassword =""; /* "4WxyJJNH";*/
    const DBBaseName= "PlongeeDSSP";
    const DBHost = "127.0.0.1";
    // const DBPort = 3388;
    const DBPort = 3306;
    
    // Cookie de cnx
    const COOKIE_LOGGING = "COOKIE_LOGGING";
    const COOKIE_CSRF = "COOKIE_CSRF";
    
    // server de mail
    const SMTP_Server = 'smtp.gmail.com';       // Compte google a voir avec OVH
    const SMTP_Port = '465';                    // SMPT port de google
    const SMTP_AuthenticateUser = 'code.fages@gmail.com';   // mon user
    const SMTP_AuthenticatePassword = 'Blacky.2004';        // mon passwd ... :-)
    const SMTP_User = 'DSSP webmaster';   // mon user

    function __construct() {
    }

    function __destruct() {
    }
    
    public static function getPHPCodePath () {
        return self::getSitePath.'php/';
    }

    public static function getSitePath () {
        return $_SERVER['DOCUMENT_ROOT'].'NewPlouf/dev/';
    }
}
