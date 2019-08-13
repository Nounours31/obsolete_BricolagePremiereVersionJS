<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/DB/DBTableUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Debug.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';


//---------------------------------------------
// Recup du body de le requete
//---------------------------------------------
$resp = JSONTools::fromInputJSON();
if ($resp !== FALSE) {
    $user = new cUser();
    $rc = $user -> validateUser ($resp['nomOrMail'], $resp['password']);
    
    if (cError::SUCCEEDED($rc)) {
        $uInfo = $user -> getUserFromNameOrMailAtLogin($resp['nomOrMail'], $resp['password']);
        $info = $user -> setCurrentUserByName ($uInfo['nom']);
        
        $secu = new cSecurite();
        $secu -> updateCookies($info[ENVT::COOKIE_LOGGING], $info[ENVT::COOKIE_CSRF]);

        $err = cError::S_OK();
        $err ->setMessage("OK User is now logged");
        echo JSONTools::toJSONErr($rc);
    }
    else {
        $rc -> Dump();
        echo JSONTools::toJSONErr($rc);
    }
}
?>
