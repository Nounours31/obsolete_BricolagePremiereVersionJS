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

if (isset ($infoSortie) && is_array($infoSortie) && isset ($infoSortie['uid'])) {
    if (isset ($infoSortie) && is_array($infoSortie) && isset ($infoSortie['infos'])) {
        // les check
        $logger ->debugTab('infoSortie[uid] -->',$infoSortie['uid']);
        $logger ->debugTab('infoSortie[infos] ',$infoSortie['infos']);
        
        $info = cSortie::SetParticipantUneSortie($infoSortie['uid'], $infoSortie['infos']);
        
        if (isset ($infoSortie['asTable']))
            $info = cSortie::GetParticipantUneSortieForTable($infoSortie['uid']);
        echo JSONTools::toJSONWithDataArray($info);
    }
    else {
        if (isset ($infoSortie['asTable'])) {
            $info = cSortie::GetParticipantUneSortieForTable($infoSortie['uid']);
        }
        else {
            $info = cSortie::GetParticipantUneSortie($infoSortie['uid']);            
        }
        echo JSONTools::toJSONWithDataArray($info);
    }
}
else {
    $err = cError::E_FAIL();
    $err ->setMessage("No info on sortie");
    echo JSONTools::toJSONErr($err);
}
?>