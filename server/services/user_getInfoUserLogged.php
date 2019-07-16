<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cUser.php';

$secu = new cSecurite();
$secu -> Check();

$user = new cUser();
$userLogged = $user -> getInfoUserLoged($_COOKIE[ENVT::COOKIE_LOGGING]);
echo json_encode($userLogged);
?>
