<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * Mot de passe du login 5202 : 177183
 */

/**
 * Description of ENVT
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRILogger.php';


class BRIError {
    private $_logger = null;
    
    private static $_E_FAIL = 1;
    private static $_S_OK = 0;
                
    protected $_errcode = 0;
    protected $_msg = "";
    
    public function __construct($errcode, $msg = 'Err message non value') {
        $this -> _logger = new BRILogger();

        $this->_errcode = $errcode;
        $this-> _msg = $msg;
        if ($errcode == 0)
            $this-> _msg = "S_OK";
        if ($errcode == 1)
            $this-> _msg = "E_FAIL";

}
    
    public function __destruct() {
    }

    public static function is_not_identical ($iErr1, $iErr2) {
        return !BRIError::is_identical ($iErr1, $iErr2);
    }
    
    public static function is_identical ($iErr1, $iErr2) {
        return $iErr1->_errcode == $iErr2 ->_errcode;
    }

    
    public function setMessage($param) {
        $this->_msg = $param;
    }

    
    public function setErrorCode($i) {
        $this->_errcode = $i;
    }

    public function getErrorCode() {
        return $this->_errcode;
    }

    public function getMessage() {
        return $this->_msg;
    }

    static function E_NOIMPL() {
        $err = new BRIError(99);
        $err ->setMessage("Not impl");
        return $err;
    }

    static function E_FAIL() {
        return new BRIError(BRIError::$_E_FAIL);
    }
    
    static function S_OK() {
        return new BRIError(BRIError::$_S_OK);
    }
    
    function FAILED () {
        if ($this -> _errcode == BRIError::$_S_OK) {
            return false;
        }
        return true;
    }

    function SUCCEEDED () {
        $rc = $this -> FAILED();
        $rc = ($rc ? false : true);
        return $rc;
    }
    
    function toArray () {
        $retour = array();
        $retour['status'] = ($this -> getErrorCode() == 0 ? 0 : 1);
        $retour['type'] = 'erreur';
        $retour['data'] = array ();
        $retour['data']['errno'] = $this -> getErrorCode();
        $retour['data']['message'] = $this -> getMessage();
        return $retour;
    }
    
    public function toString () {
        $s = BRITools::arrayToString($this->toArray());
        return $s;
    }
    
    public function toJSON () {
        $e = $this -> toArray();    
        $r = json_encode ($e);
        return  $r;
    }

    public function Dump () {
        $this -> _logger -> debug($this -> toString());
    }
}

