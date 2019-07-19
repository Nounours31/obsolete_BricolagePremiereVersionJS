<?php

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/BRISecurite.php';


class iBRIWSMessageIN {
    protected $logger = null;
    private $requete = 'none';
    private $args = array();
    private $avalaibleRequete = array ('init_passwd', 'user_', 'resa_');

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct() {
        $this->logger =  new BRILogger ('iBRIWSMessageIN');
    }

    // --------------------------------------------------------------------------------------
    // Convertisseiur et debug
    // --------------------------------------------------------------------------------------
    function buildFromArray ($a) {
        if (!isset($a)) {
            $err = new BRIError (5, "iBRIWSMessageIN - Pas de message a parser");
            return $err;
        }
        
        if (!isset ($a['requete'])) {
            $err = new BRIError (5, "iBRIWSMessageIN - Pas de requete dans le message");
            return $err;
        }
        
        if (!in_array ($a['requete'], $this -> avalaibleRequete)) {
            $err = new BRIError (5, "iBRIWSMessageIN - La requete n'est pas implementee");
            return $err;            
        }
       
        $this -> requete = $a['requete'];
        
        
        if (isset ($a['args'])) {
            if (is_array($a['args'])) {
                $this -> args = $a['args'];            
            }
            else {
                $err = new BRIError (5, "iBRIWSMessageIN - args n'est pas un tableau");
                return $err;                            
            }
        }
        
        return BRIError::S_OK();
    }
    
    public function toString () {
        $retour = "{Requete: ".$this -> requete.";   Args: ".BRITools::arrayToString($this -> args)."}";
        return $retour;
    }
    
    public function Dump () {
        $this->logger -> debug($this -> toString());
    }
}
?>

