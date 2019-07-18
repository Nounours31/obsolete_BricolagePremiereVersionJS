<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of JSONTools
 *
 * @author pfs
 */
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Tools.php';

class BRIJSONTools {
    public function __construct() {
    }
    
    public function __destruct() {
    }
    

    public static function toJSONMsg ($msg) {
        $retour = array();
        $retour['status'] = 0;
        $retour['type'] = 'message';
        $retour['data'] = array ();
        $retour['data']['message'] = $msg;        
        return  json_encode ($retour);        
    }

    public static function toJSONWithDataJSON ($data) {
        $retour = array();
        $retour['status'] = 0;
        $retour['type'] = 'data';
        $retour['data'] = json_decode($data);      
        return  json_encode ($retour);        
    }

    public static function toJSONWithDataArray($data) {
        $retour = array();
        $retour['status'] = 0;
        $retour['type'] = 'data';
        $retour['data'] = $data;      
        return  json_encode ($retour);        
    }
    
    
    public static function ArrayToJSON($arrayAttr) {
        return json_encode($arrayAttr);
    }

    public static function toJSONMsgInJSON($JSONarray) {
        $arrayAttr = json_decode($JSONarray);
        $retour = array();
        $retour['status'] = 0;
        $retour['type'] = 'message';
        $retour['data'] = array ();
        $retour['data']['message'] = $arrayAttr;        
        return  json_encode ($retour);      
    }
}

