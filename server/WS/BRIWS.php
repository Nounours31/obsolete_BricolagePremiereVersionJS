<?php
include_once $_SERVER['DOCUMENT_ROOT'].'/Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Bricolage2/server/modele/BRISecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Bricolage2/server/modele/BRIUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Bricolage2/server/WS/BRIWSMessageServer2Client.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Bricolage2/server/WS/BRIWSMessageClient2Server.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Bricolage2/server/WS/BRIWSApi.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Bricolage2/server/WS/BRIWSApiUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Bricolage2/server/WS/BRIWSApiResa.php';


/*********************************************************************************************
 * Classe mere de tous les WS de la section brico
 * 
 * Check de secu
 * decodage des input
 * lancement des WS
 ********************************************************************************************/

// le logger
$l = new BRILogger ('BRIWSUserServices');

// le message de sortie
$msgOut = new BRIWSMessageServer2Client();
$msgOut -> buildEmptyMessage();
$msgOut -> Dump();

// gestion de la secu du site
$secu = new BRISecurite ();
$rc = $secu ->lightCheck(); // le user n'est pas connecte il n'y a pas grand chose a faire

// on entre ...
if ($rc->SUCCEEDED()) {
    try {
        // decodage des inputs
        $wsApi = new BRIWSApi();    
        $msgIn = $wsApi -> decodeInput();
        $msgIn -> cleanInput();             // ici faire de la secu !!!!
        $msgIn -> Dump();
        $rc = $msgIn -> validateInputMessage();

        // si OK alors selon la demande du WS on eguille par type
        $referenceOutputData = null;
        if ($rc) {
            switch ($msgIn -> getType()) {
                case BRIConst::MSG_IN_TYPE_AVAILABLE_USER : $api = new BRIWSApiUser ();
                    $err = $api ->executeRequest($msgIn, $referenceOutputData);
                    break;

                case BRIConst::MSG_IN_TYPE_AVAILABLE_RESA : $api = new BRIWSApiResa ();
                    $err = $api ->executeRequest($msgIn, $referenceOutputData);
                    break;

                default:
                    throw new Exception("Unknown type: ".$msgIn -> getType());
            }
        }
        else {
           $err = new BRIError("Invalid input message");
        }
        if (!$err ->SUCCEEDED())
            $msgOut->buildFromError($err);
        else
            $msgOut->buildFromMessage ($referenceOutputData);
    }
    catch (Exception $e) {
        $l -> fatal($e); 
        $msgOut -> buildFromException($e);
        $msgOut -> Dump();
    }
}

// on crache le massage de sortie
$jsonMsg=$msgOut -> toJSON();
$l -> debug('JSON message OUT: -->'.$jsonMsg.'<--');
print $jsonMsg;
?>

