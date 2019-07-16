<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cMateriel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';

$secu = new cSecurite();
$secu -> Check();


$logger = new Traces('sortie_saveSortieDescriptionToDB');
$logger ->debug('Info de la sortie:');

$infoSortie = JSONTools::fromInputJSON();
if (isset ($infoSortie) && isset ($infoSortie['type'])) {
   $aResponse = cMateriel::getAllProprietes($infoSortie['type'], $infoSortie['versionCourte']);
}
else {
    $aResponse = cMateriel::getAllProprietes(null, $infoSortie['versionCourte']);
}

echo JSONTools::ArrayToJSON($aResponse);
?>