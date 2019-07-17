<?php
include_once '../Envt/BRIENVT.php';
include_once '../Modele/BRISecurite.php';

abstract class ClassName {
    function __construct() {        
    }
    
    function functionName($param) {
        
    }

    function checkBeforeStart () {
        $secu = new BRISecurite();
        $secu -> Check();
    }
}
?>

