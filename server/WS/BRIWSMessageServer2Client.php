<?php

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIENVT.php';


class BRIWSMessageServer2Client {
    protected $logger = null;
    protected $status = 0;
    protected $type   = '';
    protected $data   = array ();

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct() {
        $this-> logger =  new BRILogger ('iBRIWSMessageOUT');
        $this -> status = BRIConst::_MSG_OUT_NOACTION;
        $this -> type = 'xxx';
        $this -> data['errno'] = 0;
        $this -> data['message'] = '';
    }

    // --------------------------------------------------------------------------------------
    // Convertisseiur et debug
    // --------------------------------------------------------------------------------------
    function buildEmptyMessage () {
        $this -> status = BRIConst::_MSG_OUT_NOACTION;
        $this ->  type = 'xxx';
        $this -> data['errno'] = 0;
        $this -> data['message'] = '';
        return;
    }
    
    function buildFromError ($err) {
        $this -> status = BRIConst::_MSG_OUT_ERROR;
        $this -> type = 'erreur';
        $this -> data['errno'] = $err -> getErrorCode();
        $this -> data['message'] = $err -> getMessage();
        return;
    }
    
    function buildFromException ($e) {
        $this -> status = BRIConst::_MSG_OUT_ERROR;
        $this -> type = 'exception';
        $this -> data['errno'] = '55';
        $this -> data['message'] = $e -> getMessage();
        return;
    }
    
    function buildFromMessage ($msg) {
        $this -> status = BRIConst::_MSG_OUT_OK;
        $this -> type = 'WS response';
        $this -> data['errno'] = '0';
        $this -> data['message'] = msg;
        return;
    }
    
    public function toString () {
        $retour =  "DUMP: [status: ".$this->status."]-[type:".$this->type."]"; 
        $retour .= '-[data[errno]: '.$this->data['errno'].']-[data[message]:'.$this->data['message'].']';
        return $retour;
    }
    
    public function toJSON () {
        $json = '{"status": '.$this -> status.', "type" : "'.$this -> type.'", "data": [{"errno": '.$this -> data['errno'].'}, {"message":"'.$this -> data['message'].'"}]}';
        $r = json_encode ($json);
        if ($r === FALSE) {
            $this->logger -> fatal ('Error PARSING TO JSON');
            BRITools::GenerateJSONErrorMessage(json_last_error(), $this->logger);
        }
        return  $r;
    }

    public function Dump () {
        $this->logger -> debug($this -> toString());
    }
}
?>

