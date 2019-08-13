<?php

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/BRISecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRITools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/WS/BRIWSMessageClient2Server.php';


abstract class iBRIWSApi {
    abstract function executeRequest($msgIN, &$referenceMsgOut);
}
?>

