<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cMateriel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Tools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';

$secu = new cSecurite();
$secu -> Check();

/*
 *  let Infos = {
               'uidMateriel': nomMateriel,
               'debut': uidSectionDuMateriel,
               'fin': typeDuMateriel,
          };
 */
$infoSortie = JSONTools::fromInputJSON();
$aListInputAttendues = array ('uidMateriel', 'debut', 'fin');
if (Tools::isInputsValides($aListInputAttendues, $infoSortie)) {
    $rc = cMateriel::getDisponibiliteMaterielWithDateAsHTML ($infoSortie['uidMateriel'], $infoSortie['debut'], $infoSortie['fin']);
    echo JSONTools::ArrayToJSON($rc);
}
else {
    return new cError(500);
}
?>