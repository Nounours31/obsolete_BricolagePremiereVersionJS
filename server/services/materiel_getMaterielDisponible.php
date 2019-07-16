<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cMateriel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';

$secu = new cSecurite();
$secu -> Check();


$infoSortie = JSONTools::fromInputJSON();
/*
[04/08/2018-23:45:08 # inconnu] JSONTools.php -- POST content: -->[{"propriete":"Type de Materiel","estceunepropriete":"false","val":"detendeur"},{"propriete":"sorties","estceunepropriete":"true","val":"-"},{"propriete":"taille","estceunepropriete":"true","val":"-"},{"propriete":"taillebloc","estceunepropriete":"true","val":"-"},{"propriete":"typedetendeur","estceunepropriete":"true","val":"-"}]<--
[04/08/2018-23:45:08 # inconnu] JSONTools.php -- POST decoded  [0 : [[propriete : {Type de Materiel}][estceunepropriete : {false}][val : {detendeur}]]][1 : [[propriete : {sorties}][estceunepropriete : {true}][val : {-}]]][2 : [[propriete : {taille}][estceunepropriete : {true}][val : {-}]]][3 : [[propriete : {taillebloc}][estceunepropriete : {true}][val : {-}]]][4 : [[propriete : {typedetendeur}][estceunepropriete : {true}][val : {-}]]]
[04/08/2018-23:45:08 # inconnu] LIST ALL MATERIEL:
*/
$OK = true;
if (!is_array($infoSortie)) $OK = false;
if ($OK && (count($infoSortie) < 2)) $OK = false;

if ($OK) {
    $aResponse = cMateriel::getMaterielDisponible ($infoSortie);
}
else {
    return new cError(500);
}
echo JSONTools::ArrayToJSON($aResponse);
?>