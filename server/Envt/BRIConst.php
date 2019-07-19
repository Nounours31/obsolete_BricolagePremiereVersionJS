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
class BRIConst {
    const isLOCALSERVER = true;
    
    // le root
    const relativeDocRoot = 'Bricolage2/';
    
    // fichier a uploader
    const ExternalFilePATHTODISK = BRIConst::relativeDocRoot . 'upload/';
    
    // log php
    const tracePATHTODISK = BRIConst::relativeDocRoot . 'logs/';
    const traceFILE = "traces.log";

    // Debug Info
    const _ALL = 1;
    const _DEBUG = 10;
    const _INFO = 50;
    const _FATAL = 99;

    // DB Cnx
    const DBUser = "root"; /*"cedssectbrico";*/
    const DBPassword =""; /* "4WxyJJNH";*/
    const DBBaseName= "PlongeeDSSP";
    const DBHost = "127.0.0.1";
    const DBPort = 3306;
    
    // Cookie de cnx
    const COOKIE_LOGGING = "COOKIE_LOGGING";
    const COOKIE_CSRF = "COOKIE_CSRF";
    
    // server de mail
    const SMTP_Server = 'smtp.gmail.com';       // 
    const SMTP_Port = '465';                    // SMPT port de google
    const SMTP_AuthenticateUser = 'code.fages@gmail.com';   // mon user
    const SMTP_AuthenticatePassword = 'Blacky.2004';        // mon passwd ... :-)
    const SMTP_User = 'DSSP webmaster';   // mon user
}
