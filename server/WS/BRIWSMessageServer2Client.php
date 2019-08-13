<?php

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIENVT.php';

/*******************************************************************************
 * Classe des message qui sont echanger entre le Server et le client
 * La classe JS est en pendant de celle ci
 * 
 * Attention NE PAS Ecrire de message qui ne passe pas par cette classe
 * apres c'es la merde a debugger  
 * 
 *  A enrichir en // avec le JS !
 * 
 * messageOut = 
 * {
 *    type="error" ou "message"  
 *    data = 
 *       <si erreur> data[errorno] & data[data]
 *       <sinon> data[data]
 * }

 *******************************************************************************/

class BRIWSMessageServer2Client {
    protected $logger = null;
    protected $type   = '';
    protected $data   = array ();

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct() {
        $this-> logger =  new BRILogger ('iBRIWSMessageOUT');
        $this -> type = BRIConst::_MSG_TYPE_UNDEF;
        $this -> data[BRIConst::_MSG_TYPE_ERRORNO] = -1;
        $this -> data[BRIConst::_MSG_TYPE_MESSAGE] = '';
    }

    // --------------------------------------------------------------------------------------
    // Convertisseiur et debug
    // --------------------------------------------------------------------------------------
    function buildEmptyMessage () {
        $this ->  type = BRIConst::_MSG_TYPE_MESSAGE;
        $this -> data[BRIConst::_MSG_TYPE_ERRORNO] = -1;
        $this -> data[BRIConst::_MSG_TYPE_MESSAGE] = '';
        return;
    }
    
    function buildFromError ($err) {
        $this -> type = BRIConst::_MSG_TYPE_ERROR;
        $this -> data[BRIConst::_MSG_TYPE_ERRORNO] = $err->getErrorCode();
        $this -> data[BRIConst::_MSG_TYPE_MESSAGE] = $err -> getMessage();
        return;
    }
    
    
    
    function buildFromException ($e) {
        $this -> type = BRIConst::_MSG_TYPE_ERROR;
        $this -> data[BRIConst::_MSG_TYPE_ERRORNO] = 9000000;
        $this -> data[BRIConst::_MSG_TYPE_MESSAGE] = ($e -> getMessage()."Trace:".BRITools::arrayToString($e -> getTrace()));
        return;
    }
    
    function buildFromMessage ($msg) {
        $this -> type = BRIConst::_MSG_TYPE_MESSAGE;
        $this -> data[BRIConst::_MSG_TYPE_ERRORNO] = -1;
        $this -> data[BRIConst::_MSG_TYPE_MESSAGE] = msg;
        return;
    }
    
    public function toString () {
        $retour =  "DUMP: [type:".$this->type."]"; 
        $retour .= '-[data[errno]: '.$this->data[BRIConst::_MSG_TYPE_ERRORNO].']-[data[data]:'.
                BRITools::echapJSONPourMessageOut($this->data[BRIConst::_MSG_TYPE_MESSAGE]).']';
        return $retour;
    }
    
    public function toJSON () {
        $json = '{"type" : "'.$this -> type.'",';
        if ($this -> data[BRIConst::_MSG_TYPE_ERRORNO] >= 0) {
           $json .= '"data": [{"errno": '.$this -> data[BRIConst::_MSG_TYPE_ERRORNO].'}, {"data":"'. 
                   BRITools::echapJSONPourMessageOut($this -> data[BRIConst::_MSG_TYPE_MESSAGE]).'"}]}';
        }
        else {
            $json .= '"data": "'.BRITools::echapJSONPourMessageOut($this -> data[BRIConst::_MSG_TYPE_MESSAGE]).'"}';
        }
        $r = json_encode ($json);
        if ($r === FALSE) {
            $this->logger -> fatal ('Error PARSING TO JSON');
            BRIError::GenerateJSONErrorMessage(json_last_error(), $this->logger);
        }
        return  $r;
    }

    public function Dump () {
        $this->logger -> debug($this -> toString());
    }
}
?>

