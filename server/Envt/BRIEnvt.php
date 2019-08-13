<?php
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
ini_set('display_errors', 'on');

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIConst.php';

class BRIEnvt {
    const isLOCALSERVER = true;
    const _DEBUGLEVEL = BRIConst::_ALL;
    const _DEBUGMAIL = true;
    const _DEBUGMAIL_EMAIL = 'pfs@3ds.com';
    
    
    // Cookie de cnx
    const COOKIE_LOGGING = "BricoCookie";

    // server de mail
    const SMTP_Server = 'smtp.gmail.com';       // 
    const SMTP_Port = '465';                    // SMPT port de google
    const SMTP_AuthenticateUser = 'cedssections.bricolage@gmail.com'; // 'code.fages@gmail.com';   // mon user
    const SMTP_AuthenticatePassword = 'Gilles.Collin';        // mon passwd ... :-)
    const SMTP_User = self::SMTP_AuthenticateUser;   // mon user

    // access DB
    const DBUser = "root"; 
    const DBPassword =""; /* "4WxyJJNH";*/
    const DBBaseName= "cedssectbrico";
    const DBHost = "127.0.0.1";
    const DBPort = 3306;

    
    // les path
    const relativeDocRoot = 'Bricolage2/';
    const relativeWSPath = 'Bricolage2/server/WS/BRIWS.php';
    
    // fichier a uploader
    const ExternalFilePATHTODISK = 'upload/';
    
    // log php
    const tracePATHTODISK = 'logs/';
    const traceFILE = "traces.log";

    
    
    public static function getDebugLevel () {
        return self::_DEBUGLEVEL;
    }
            
}
