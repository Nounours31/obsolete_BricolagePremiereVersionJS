<?php

include_once '../Envt/BRIENVT.php';
include_once '../modele/BRISecurite.php';

class iBRIWSMessageIN {
    protected $logger = null;
    private $requete = 'none';
    private $args = array();
    private $avalaibleRequete = array ('user_resetpwd', 'user_', 'resa_');

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
        
        if (!in_array ($a['requete'], $avalaibleRequete)) {
            $err = new BRIError (5, "iBRIWSMessageIN - La requete n'est pas implementee");
            return $err;            
        }

        if (!in_array ($a['requete'], $avalaibleRequete)) {
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
        $retour = "{Err: ".$this -> requete.";   msg:".BRITools::arrayToString($this -> args)."}";
        return $retour;
    }
    
    public function Dump () {
        $_logger -> debug($this -> toString());
    }
}
?>

