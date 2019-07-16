<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBReservation.php';

$secu = new cSecurite();
$secu -> Check();

$infoSortie = JSONTools::fromInputJSON();
if (isset ($infoSortie)) {
    $dbMateriel = new DBMateriel();
    $all = $dbMateriel -> getMateriel();
    echo json_encode($all);
}
?>