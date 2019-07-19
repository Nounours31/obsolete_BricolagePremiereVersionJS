<?php

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/iBRIModel.php';


class BRIUser extends iBRIModel { 
    public function __construct() {
        parent::__construct();
    }
    
    public function __destruct() {
    }
}
