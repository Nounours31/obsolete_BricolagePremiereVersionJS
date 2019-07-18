<?php

include_once '../Envt/BRIENVT.php';
include_once '../modele/BRISecurite.php';

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
        $retour = new iBRIWSMessage();
        
        $retour -> status = ($err -> getErrorCode() == 0 ? 0 : 1);
        $retour ->  type = 'erreur';
        $aData = $retour -> data;
        $aData['errno'] = $err -> getErrorCode();
        $aData['message'] = $err -> getMessage();
        return $retour;
    }
    
    public function toString () {
        $retour = "{Err: ".$this -> getErrorCode().";   msg:".$this -> getMessage()."}";
        return $retour;
    }
    
    public function toJSON () {
        $e = $this -> toArray();    
        $r = json_encode ($e);
        return  $r;
    }

    public function Dump () {
        $_logger -> debug($this -> toString());
    }
}
?>

