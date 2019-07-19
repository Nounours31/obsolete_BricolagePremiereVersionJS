<?php
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/BRISecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/BRIUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/WS/BRIWSMessageServer2Client.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/WS/BRIWSMessageClient2Server.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/WS/BRIWSUserApi.php';


// init
$l = new BRILogger ('BRIWSUserServices');
$msgOut = new BRIWSMessageServer2Client();
$msgOut -> buildEmptyMessage();
$msgOut -> Dump();

$secu = new BRISecurite ();

// check in
$rc = $secu ->lightCheck(); // le user n'est pas connecte il n'y a pas grand chose a faire
if ($rc->SUCCEEDED()) {
    try {
        $wsApi = new BRIWSUserApi();    
        $msgIn = $wsApi -> decodeInput();
        $msgIn -> Dump();
        
        $rc = $msgIn -> validateInputMessage();
        if ($rc->SUCCEEDED()) {
            $wsApi -> executeRequest($msgIn);
        }
    }
    catch (Exception $e) {
        $l -> fatal($e); 
        $msgOut -> buildFromException($e);
        $msgOut -> Dump();
    }
}

$jsonMsg=$msgOut -> toJSON();
$l -> debug('JSON message OUT: -->'.$jsonMsg.'<--');

print $jsonMsg;
?>

