<?php

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIENVT.php';


class iBRIWSMessageOUT {
    protected $logger = null;
    protected $status = 0;
    protected $type   = '';
    protected $data   = array ();

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct() {
        $this->logger =  new BRILogger ('iBRIWSMessageOUT');
    }

    // --------------------------------------------------------------------------------------
    // Convertisseiur et debug
    // --------------------------------------------------------------------------------------
    function buildFromError ($err) {
        $this -> status = ($err -> getErrorCode() == 0 ? 0 : 1);
        $this ->  type = 'erreur';
        $aData = $this -> data;
        $aData['errno'] = $err -> getErrorCode();
        $aData['message'] = $err -> getMessage();
        return;
    }
    
    function buildFromException ($e) {
        $this -> status = 1;
        $this ->  type = 'exception';
        $aData = $this -> data;
        $aData['errno'] = '55';
        $aData['message'] = $e -> getMessage();
        return;
    }
    
    
    public function toString () {
        $retour =  "{status: ".$this->status.";   type:".$this->type.";   data:".$this->type."\n";
        $retour .= '\t\terrno: '.$this->data['errno'].'      message:'.$this->data['errno'].'}';
        return $retour;
    }
    
    public function toJSON () {
        $r = json_encode ($this);
        return  $r;
    }

    public function Dump () {
        $this->logger -> debug($this -> toString());
    }
}
?>

