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

class JSONTools {
    public function __construct() {
    }
    
    public function __destruct() {
    }
    
    public static function toJSONErr ($err) {
        $loger = new Traces();
        $e = $err -> toArray();
        $loger->DebugTraceTableau("**************", $e, ENVT::_DEBUG);
        
        $r = json_encode ($e);
        $loger->debug($r);
        return  $r;
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
    
    public static function fromInputJSON () {
        $loger = new Traces();
        
        //Make sure that it is a POST request.
        if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
            throw new Exception('Request method must be POST!');
        }

        //Make sure that the content type of the POST request has been set to application/json
        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
        $loger ->debug("JSONTools.php -- contentType: -->".$contentType."<--");
        if(strstr($contentType, 'application/json') === FALSE){
            throw new Exception('Content type must be: application/json - find '.$contentType);
        }

        //Receive the RAW post data.
        $content = trim(file_get_contents("php://input"));
        $loger ->debug("JSONTools.php -- POST content: -->".$content."<--");

        //Attempt to decode the incoming RAW post data from JSON.
        $decoded = json_decode($content, true);
        $loger ->debugTab("JSONTools.php -- POST decoded", $decoded);
        
        return $decoded;
    }
    
    public static function fromInputPOSTURLENCODE () {
        //Make sure that it is a POST request.
        if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
            throw new Exception('Request method must be POST!');
        }

        //Make sure that the content type of the POST request has been set to application/json
        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
        if(strstr($contentType, 'x-www-form-urlencoded') === FALSE){
            throw new Exception('Content type must be: x-www-form-urlencoded - find '.$contentType);
        }

        $decode = array();
        foreach ($_POST as $key => $value) {
            $decode[$key] = $value;
        }
        
        return $decode;
    }

    public static function fromInputPOSTMultiPartFormData () {
        $loger = new Traces('JSONTools::fromInputPOSTMultiPartFormData');

        if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
            throw new Exception('Request method must be POST!');
        }

        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
        if(strstr($contentType, 'multipart/form-data') === FALSE){
            throw new Exception('Content type must be: multipart/form-data - find '.$contentType);
        }

        
        $decode = array();
        if (isset ($_POST)) {
            $loger ->debugTab("decode POST:", $_POST);
            foreach ($_POST as $key => $value) {
                $decode[$key] = $value;
            }
        }
        
        if (isset ($_FILES)) {
            $loger ->debugTab("decode FILES:", $_FILES);
            $decode['__FILES__'] = array();
            foreach ($_FILES as $key => $value) {
                $isMultipleUpload = false;
                if (is_array($_FILES[$key]['name'])) {
                    $isMultipleUpload = true;
                }
                if (!$isMultipleUpload) {
                    if ($_FILES[$key]['error'] != 0) {
                        continue;
                    }
                    if ($_FILES[$key]['size'] < 1) {
                        continue;
                    }
                    $unFichier = array();
                    $unFichier['key'] = $key;
                    $unFichier['name'] = $_FILES[$key]['name'];
                    $unFichier['type'] = $_FILES[$key]['type'];
                    $unFichier['absolute_path'] = $_FILES[$key]['tmp_name'];
                    $decode['__FILES__'][Tools::UUID()] = $unFichier;
                }
                else {
                    for ($i = 0; $i < count($_FILES[$key]['name']); $i++) { 
                        if ($_FILES[$key]['error'][$i] != 0) {
                            continue;
                        }
                        if ($_FILES[$key]['size'][$i] < 1) {
                            continue;
                        }
                        $unFichier = array();
                        $unFichier['key'] = $key.'_indice_'.$i;
                        $unFichier['name'] = $_FILES[$key]['name'][$i];
                        $unFichier['type'] = $_FILES[$key]['type'][$i];
                        $unFichier['absolute_path'] = $_FILES[$key]['tmp_name'][$i];
                        $decode['__FILES__'][Tools::UUID()] = $unFichier;
                        $loger ->debugTab("FILES decode Interne: ",$decode);
                    }
                }
            }
        }
        return $decode;
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

