<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/DB/DBUserCACI.php';

$secu = new cSecurite();
$secu -> Check();

$loger = new Traces('user_setCACIOnUser.php');
$userCaci = new DBUserCACI();

$err = false;
try {
    $loger ->debug("Step into set CACI on user");
    $resp = JSONTools::fromInputPOSTMultiPartFormData();
    $rc = $userCaci->setCACI ($resp);
}
catch (Exception $e) {
    $err = true;
    $loger ->debug("Erreur in CACI MultiPart ".$e ->getMessage());    
}

if ($err) {
    $loger ->debug("Step into set CACI on user");
    $resp = JSONTools::fromInputJSON();
    $rc = $userCaci->updateCACI ($resp);    
}

$loger ->debug("set CACI RC:".$rc ->toString());
return JSONTools::toJSONErr($rc);
?>

