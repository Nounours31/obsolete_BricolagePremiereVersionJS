<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBReservation.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';

$secu = new cSecurite();
//$secu -> Check();


$infoSortie = JSONTools::fromInputJSON();
$logger = new Traces();
$logger ->debug('Info de la sortie:');
$logger ->debugTab('infoSortie  -- ', $infoSortie);

if (isset ($infoSortie) 
        && is_array($infoSortie) 
        && isset ($infoSortie['start']) 
        && isset ($infoSortie['end'])
        && isset ($infoSortie['userId'])
        && isset ($infoSortie['materielId'])) {

    $dbMateriel = new DBReservation();
    $start = strtotime ($infoSortie['start']);
    $end = strtotime ($infoSortie['end']);    
    $user = $infoSortie['userId'];    
    $uidmateriel = $infoSortie['materielId'];    
    $logger ->debug("**************  ".$user);
    $logger ->debug("**************  ".$uidmateriel);
    $all = $dbMateriel -> sendReservationToDBAsync($start, $end, $user, $uidmateriel);
    echo json_encode($all);
}
else {
    $err = cError::E_FAIL();
    $err ->setMessage("No info on sortie");
    echo JSONTools::toJSONErr($err);
}
?>