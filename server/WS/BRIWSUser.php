<?php
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/BRIUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/WS/iBRIWS.php';

class BRIWSUser extends iBRIWS {
    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct($className = "abstrart class iBRIWS") {
        parent::__construct ($className);
        $logger = new BRILogger($className);
    }
    
}
?>


