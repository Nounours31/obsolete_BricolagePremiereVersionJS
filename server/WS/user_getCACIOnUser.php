<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBUserCACI.php';




$info = JSONTools::fromInputJSON();
$logger = new Traces('getCACIInfo');
$logger ->debugTab('info  -- ', $info);

$err = cError::S_OK();
if (!isset($info) || !isset($info['uid'])) {
    $err -> setMessage('invalide input');
    $err -> setErrorCode(200);
    echo JSONTools::toJSONErr($err); 
    exit();
}

$caciDB = new DBUserCACI();
$caci = $caciDB -> getUserCACI($info['uid']);
echo JSONTools::ArrayToJSON($caci);
?>

