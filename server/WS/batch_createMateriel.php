<?php
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBTableUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Debug.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cMateriel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php'; 


$resp = JSONTools::fromInputJSON();
$log = array();
foreach ($resp as $value) {    
    array_push($log, cMateriel::createMateriel ($value['nom'], $value['uidsection'], $value['type'], $value['propriete']));
}
echo JSONTools::ArrayToJSON($log);
?>
