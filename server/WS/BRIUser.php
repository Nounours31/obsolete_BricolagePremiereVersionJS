<?php
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/BRISecurite.php';
//include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/BRIUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/WS/iBRIWSMessageIN.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/WS/iBRIWSMessageOUT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/WS/BRIWSUser.php';


$l = new BRILogger ('BRIUser');
$retour = new iBRIWSMessageOUT();

$secu = new BRISecurite ();
$rc = $secu ->lightCheck(); // le user n'est pas connecte il n'y a pas grand chose a faire
$rc -> Dump();

if ($rc->SUCCEEDED()) {
    try {
        $wsApi = new BRIWSUser();    
        $msgIn = $wsApi -> decodeInput();
        $msgIn -> Dump();
    }
    catch (Exception $e) {
        $l -> fatal($e); 
        $retour -> buildFromException($e);
    }
}
print $retour -> toJSON();
?>

