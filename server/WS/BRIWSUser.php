<?php
include_once '../Envt/BRIENVT.php';
include_once '../tools/BRILogger.php';
include_once '../modele/BRIUser.php';
//include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cPasswordManagement.php';



class iBRIWSUser extends iBRIWS {
    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct($className = "abstrart class iBRIWS") {
        parent::__construct ($className);
        $logger = new BRILogger($className);
    }
    
}
?>


