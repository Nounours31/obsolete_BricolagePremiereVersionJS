<?php

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/iBRIModel.php';


class BRIUser extends iBRIModel { 
    public function __construct($info) {
        parent::__construct($info);
    }
    
    public function __destruct() {
    }
}
