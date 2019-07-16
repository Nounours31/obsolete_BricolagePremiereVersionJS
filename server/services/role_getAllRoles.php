<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBTableRole.php';

$secu = new cSecurite();
$secu -> Check();

/*
$info = JSONTools::fromInputJSON();
$logger = new Traces('getInfoUserFromUID');
$logger ->debugTab('info  -- ', $info);

$err = cError::S_OK();
if (!isset($info) || !isset($info['uid'])) {
    $err -> setMessage('invalide input');
    $err -> setErrorCode(200);
    echo JSONTools::toJSONErr($err); 
    exit();
}
*/
$roleDB = new DBTableRole();
$roles = $roleDB -> getAllRoles();
echo JSONTools::ArrayToJSON($roles);
?>
