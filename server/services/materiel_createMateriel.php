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
               'nomMateriel': nomMateriel,
               'uidSectionDuMateriel': uidSectionDuMateriel,
               'typeDuMateriel': typeDuMateriel,
               'UnePropDuMateriel': UnePropDuMateriel,
               'valeurDeCetteProp': valeurDeCetteProp,
          };
 */
$infoSortie = JSONTools::fromInputJSON();
$aListInputAttendues = array ('nomMateriel', 'uidSectionDuMateriel', 'typeDuMateriel', 'UnePropDuMateriel', 'valeurDeCetteProp');
if (Tools::isInputsValides($aListInputAttendues, $infoSortie)) {
    $prop = array();
    $prop['propriete'] = array();
    $prop['propriete'][$infoSortie['UnePropDuMateriel']] = array();
    $prop['propriete'][$infoSortie['UnePropDuMateriel']] = array();
    array_push ($prop['propriete'][$infoSortie['UnePropDuMateriel']], $infoSortie['valeurDeCetteProp']);
    print (JSONTools::ArrayToJSON(cMateriel::createMateriel ($infoSortie['nomMateriel'], $infoSortie['uidSectionDuMateriel'], $infoSortie['typeDuMateriel'], $prop['propriete'])));
}
else {
    $err = new cError(500);
    print (JSONTools::toJSONErr($err));
}
?>