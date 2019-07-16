<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSortie.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';

$secu = new cSecurite();
$secu -> Check();


$infoSortie = JSONTools::fromInputJSON();
$logger = new Traces();
$logger ->debug('Info de la sortie:');
$logger ->debugTab('infoSortie  -- ', $infoSortie);
/*
 'uidUsers': participantsSortie,
 'liee': liee,
 'UIDLien': lienUID,
 'uidSortie': idSortie,
*/
if (isset ($infoSortie) && is_array($infoSortie) && 
			isset ($infoSortie['uidUsers']) && 
			isset ($infoSortie['liee']) && 
			isset ($infoSortie['UIDLien']) && 
			isset ($infoSortie['uidSortie'])) {
        // les check
        $logger ->debugTab('infoSortie[uid] -->',$infoSortie['uidUsers']);
        $logger ->debugTab('infoSortie[liee] ',$infoSortie['liee']);
        $logger ->debugTab('infoSortie[UIDLien] ',$infoSortie['UIDLien']);
        $logger ->debugTab('infoSortie[uidSortie] ',$infoSortie['uidSortie']);
        
        $info = cSortie::SetParticipantUneSortieNew($infoSortie['uidUsers'], $infoSortie['uidSortie'], $infoSortie['liee'], $infoSortie['UIDLien']);
}
else {
    $err = cError::E_FAIL();
    $err ->setMessage("No info on sortie");
    echo JSONTools::toJSONErr($err);
}
?>