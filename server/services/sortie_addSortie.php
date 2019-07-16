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
if (isset ($infoSortie) && 
        is_array($infoSortie) && 
	isset ($infoSortie['nomSortie']) && 
	isset ($infoSortie['uidOrganisateur']) && 
	isset ($infoSortie['dateDeb']) && 
	isset ($infoSortie['dateFin'])) {
        $optionelOrga = array();
        if (isset ($infoSortie['uidsOrgaOptionel']) && is_array($infoSortie['uidsOrgaOptionel'])) {
            $optionelOrga = $infoSortie['uidsOrgaOptionel'];
            $logger = new Traces();
            $logger->debug("*** liste Optionnelle : " + is_array($optionelOrga));
            $logger->debugTab("*** liste Optionnelle : ", $optionelOrga);
        }
        $info = cSortie::addSortie($infoSortie['nomSortie'], $infoSortie['uidOrganisateur'], $infoSortie['dateDeb'], $infoSortie['dateFin'], $optionelOrga);
}
else {
    $err = cError::E_FAIL();
    $err ->setMessage("No info on sortie");
    echo JSONTools::toJSONErr($err);
}
?>