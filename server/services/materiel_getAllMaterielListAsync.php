<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBMateriel.php';

$secu = new cSecurite();
$secu -> Check();

$dbMateriel = new DBMateriel();
$all = $dbMateriel -> getAllMaterielList();
echo json_encode($all);
?>