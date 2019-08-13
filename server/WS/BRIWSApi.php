<?php
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/modele/BRIUser.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/WS/iBRIWSApi.php';

/*********************************************************************************************
 * Classe mere de tous les implementation des API 
 * 
 * Semble pour le moment inutile
 ********************************************************************************************/
class BRIWSApi extends iBRIWSApi
{
    protected $loger = null;

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct($className = "BRIWSApi") {
        $this->logger = new BRILogger($className);
    }

    
    function executeRequest($msgIN, &$referenceMsgOut) { throw new Exception("Not implemented"); }
     
    // --------------------------------------------------------------------------------------
    // session checker
    // --------------------------------------------------------------------------------------
    /* Check if session info are set */
    function lightCheckBeforeStart() {
        $this -> logger -> all("StepInto lightCheckBeforeStart");
        $secu = new BRISecurite();
        $secu->lightCheck();
    }

    function checkBeforeStart() {
        $this -> logger -> debug("StepInto checkBeforeStart");
        $secu = new BRISecurite();
        $secu->Check();
    }

    // --------------------------------------------------------------------------------------
    // Inputs parser
    // --------------------------------------------------------------------------------------
    function decodeInput() {
        $retour = new BRIWSMessageClient2Server();        
        $contenu = array();

        # debug
        $content = trim(file_get_contents("php://input"));
        $this -> logger ->debug("decodeInput:: input is -->" . $content . "<--");
        # end debug
        
        //Make sure that it is a POST request.
        if (strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0) {
            throw new Exception('Request method must be POST!');
        }

        // selon le contenu parsing different
        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
        $this -> logger -> debug("decodeInput:: contentType is -->" . $contentType . "<--");
        if (strstr($contentType, 'application/json') === FALSE) {
            if (strstr($contentType, 'x-www-form-urlencoded') === FALSE) {
                if (strstr($contentType, 'multipart/form-data') === FALSE) {
                    throw new Exception('Content type must be: application/json OR x-www-form-urlencoded- find OR multipart/form-data ' . $contentType);
                } else {
                    $contenu = $this->_decodeMultiPartFormData();
                }
            } else {
                $contenu = $this->_decodeFormURLEncodedInput();
            }
        } else {
            $contenu = $this->_decodeJSONInput();
        }
        
        $err = $retour -> buildFromArray ($contenu);
        if ($err -> FAILED()) {
            $this -> logger-> debug("buildFromArray:: failed - err :".$err -> toString());
            $this -> logger-> debug("buildFromArray:: Dump du context :".is_array($contenu)." Contenu: -->".(is_array($contenu) ? BRITools::arrayToString($contenu) : $contenu));
            throw new Exception('iBRIWSApi::decodeInput # unable to parse -- err:' . $err -> toString());
        }
        return $retour;
    }

    // --------------------------------------------------------------------------------------
    // Private Inputs parser selon les infos entrees
    // --------------------------------------------------------------------------------------
    private function _decodeJSONInput() {
        $this -> logger -> all("_decodeJSONInput::StepIn");

        //Receive the RAW post data.
        $content = trim(file_get_contents("php://input"));

        //Attempt to decode the incoming RAW post data from JSON.
        $decoded = json_decode($content, true);
        if ($decoded == null) {
            $this -> logger ->debug("JSONTools.php -- json decoded: NULL");
            throw new Exception('iBRIWSApi::_decodeJSONInput # unable to parse -- invalid json format test it first ...');
        }
        else 
            $this -> logger ->debugTab("JSONTools.php -- json decoded: ", $decoded);
        return $decoded;
    }

    private function _decodeFormURLEncodedInput() {
        $this -> logger-> all("StepInto _decodeFormURLEncodedInput");
        foreach ($_POST as $key => $value) {
            $msg .= '['.$key.'] = ';
            if (is_array($value))
                $msg .= BRITools::arrayToString($value);
            else 
                $msg .= $value;
            $msg .= '; ';
        }
        $this -> logger-> all($msg);
        
        
        $decode = array();
        foreach ($_POST as $key => $value) {
            $decode[$key] = $value;
        }
        return $decode;
    }

    private function _decodeMultiPartFormData() {
        $this -> logger->all("StepInto _decodeMultiPartFormData");

        $decode = array();
        if (isset($_POST)) {
            $this -> logger->debugTab("decode POST:", $_POST);
            foreach ($_POST as $key => $value) {
                $decode[$key] = $value;
            }
        }

        if (isset($_FILES)) {
            $this -> logger->debugTab("decode FILES:", $_FILES);
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
                    $decode['__FILES__'][BriTools::UUID()] = $unFichier;
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
                        $decode['__FILES__'][BRITools::UUID()] = $unFichier;
                        $this -> logger->debugTab("FILES decode Interne: ", $decode);
                    }
                }
            }
        }
        return $decode;
    }
}
?>


