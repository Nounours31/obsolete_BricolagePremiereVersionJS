<?php

include_once '../Envt/BRIENVT.php';
include_once '../modele/BRISecurite.php';

abstract class iBRIWS {

    protected $loger = null;

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct($className = "abstrart class iBRIWS") {
        $logger = new BRILogger($className);
    }

    // --------------------------------------------------------------------------------------
    // session checker
    // --------------------------------------------------------------------------------------
    /* Check if session info are set */
    function lightCheckBeforeStart() {
        $logger->All("StepInto lightCheckBeforeStart");
        $secu = new BRISecurite();
        $secu->lightCheck();
    }

    function checkBeforeStart() {
        $logger->All("StepInto checkBeforeStart");
        $secu = new BRISecurite();
        $secu->Check();
    }

    // --------------------------------------------------------------------------------------
    // Inputs parser
    // --------------------------------------------------------------------------------------
    function decodeInput($postarray, $getarray) {
        $retour = new iBRIWSMessageIN();
        
        $contenu = array();
        $loger = new BRITraces();

        //Make sure that it is a POST request.
        if (strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0) {
            throw new Exception('Request method must be POST!');
        }

        // selon le contenu parsing different
        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
        $loger->debug("JSONTools.php -- contentType: -->" . $contentType . "<--");
        if (strstr($contentType, 'application/json') === FALSE) {
            if (strstr($contentType, 'x-www-form-urlencoded') === FALSE) {
                if (strstr($contentType, 'multipart/form-data') === FALSE) {
                    throw new Exception('Content type must be: application/json OR x-www-form-urlencoded- find OR multipart/form-data ' . $contentType);
                } else {
                    $contenu = $this->_decodeMultiPartFormData();
                }
            } else {
                $contenu = $this->_decodeFormURLEncodedInput($postarray, $getarray);
            }
        } else {
            $contenu = $this->_decodeJSONInput($postarray, $getarray);
        }
        
        $err = $retour -> buildFromArray ($contenu);
        
        return $retour;
    }

    // --------------------------------------------------------------------------------------
    // Private Inputs parser selon les infos entrees
    // --------------------------------------------------------------------------------------
    private function _decodeJSONInput() {
        $logger->All("StepInto _decodeJSONInput");

        //Receive the RAW post data.
        $content = trim(file_get_contents("php://input"));
        $logger->debug("JSONTools.php -- POST content: -->" . $content . "<--");

        //Attempt to decode the incoming RAW post data from JSON.
        $decoded = json_decode($content, true);
        $logger->debugTab("JSONTools.php -- POST decoded", $decoded);

        return $decoded;
    }

    private function _decodeFormURLEncodedInput() {
        $logger->All("StepInto _decodeFormURLEncodedInput");

        $decode = array();
        foreach ($_POST as $key => $value) {
            $decode[$key] = $value;
        }
        return $decode;
    }

    private function _decodeMultiPartFormData() {
        $logger->All("StepInto _decodeMultiPartFormData");

        $decode = array();
        if (isset($_POST)) {
            $loger->debugTab("decode POST:", $_POST);
            foreach ($_POST as $key => $value) {
                $decode[$key] = $value;
            }
        }

        if (isset($_FILES)) {
            $loger->debugTab("decode FILES:", $_FILES);
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
                } else {
                    for ($i = 0; $i < count($_FILES[$key]['name']); $i++) {
                        if ($_FILES[$key]['error'][$i] != 0) {
                            continue;
                        }
                        if ($_FILES[$key]['size'][$i] < 1) {
                            continue;
                        }
                        $unFichier = array();
                        $unFichier['key'] = $key . '_indice_' . $i;
                        $unFichier['name'] = $_FILES[$key]['name'][$i];
                        $unFichier['type'] = $_FILES[$key]['type'][$i];
                        $unFichier['absolute_path'] = $_FILES[$key]['tmp_name'][$i];
                        $decode['__FILES__'][Tools::UUID()] = $unFichier;
                        $loger->debugTab("FILES decode Interne: ", $decode);
                    }
                }
            }
        }
        return $decode;
    }
}
?>

