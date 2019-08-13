<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/DB/DBTableUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Debug.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';

header_remove(); 

$secu = new cSecurite();
$secu -> clean();
?>
