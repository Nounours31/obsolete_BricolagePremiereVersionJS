<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBMateriel.php';

$secu = new cSecurite();
$secu -> Check();

$infoSortie = JSONTools::fromInputJSON();
$dbMateriel = new DBMateriel();
$DoisJeLesPacker = true;
$all = $dbMateriel -> getAllMaterielList($infoSortie['uidMateriel'], $DoisJeLesPacker);
echo JSONTools::ArrayToJSON($all);
?>