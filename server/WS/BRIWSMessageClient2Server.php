<?php

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/BRISecurite.php';


/*******************************************************************************
 * 
 * Classe des message qui sont echanger entre le client et le server
 * La classe JS est en pendant de celle ci
 * 
 * Attention NE PAS Ecrire de message qui ne passe pas par cette classe
 * apres c'es la merde a debugger  
 * 
 * messageIn = 
 * {
 *    requete="add" ou "initpwd" ou ... 
 *    type="user" ou "resa"
 *    args=[{nom1: val1}, {nom2, val2}, ...]
 * }
 *******************************************************************************/
class BRIWSMessageClient2Server {
    protected $logger = null;               // le logger
    private $requete = 'none';              // le type de la requete
    private $type = 'none';              // le type de la requete
    private $args = array();                // les argument de la requete
    
    // const de la classe - sais pas faire en PHP des const
    private $avalaibleTppeRequete = [BRIConst::MSG_IN_TYPE_AVAILABLE_USER, BRIConst::MSG_IN_TYPE_AVAILABLE_RESA];
    private $avalaibleRequete = [BRIConst::MSG_IN_SERVICE_AVAILABLE_USERINITPWD,
        BRIConst::MSG_IN_SERVICE_AVAILABLE_USERLOGGING];

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct() {
        $this->logger =  new BRILogger ('BRIWSMessageClient2Server');
    }

    
    public function getRequete() { return $this->requete;}
    public function getType() { return $this->type;}
    public function hasArgs($argName) {
        return array_key_exists($argName, $this->args);
    }
    public function getargs($argName) {
        if ($this -> hasArgs($argName))
            return $this->args[$argName];
        return '';
    }
    
    // --------------------------------------------------------------------------------------
    // prend un ensemble de valeur lue dans le php://input et 
    // en fait un message comprehensible pour les WS qui vont etre appelles
    // --------------------------------------------------------------------------------------
    function buildFromArray ($ArrayOfArgsEnvoyedParLeClient) {
        $this->logger->debug("::buildFromArray - Test contenu du tab");
        if (!isset($ArrayOfArgsEnvoyedParLeClient)) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de message a parser");
            return $err;
        }
        
        // est ce que le type de la requete est dans la demande
        $this->logger->debug("::buildFromArray - Test type");
        if (!isset ($ArrayOfArgsEnvoyedParLeClient[BRIConst::MSG_IN_TYPE])) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de requete dans le message");
            return $err;
        }
        if (!in_array ($ArrayOfArgsEnvoyedParLeClient[BRIConst::MSG_IN_TYPE], $this -> avalaibleTppeRequete)) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - La requete n'est pas implementee");
            return $err;            
        }

        
        
        
        // est ce que le nom de la requete est dans la demande
        $this->logger->debug("::buildFromArray - Test requete");
        if (!isset ($ArrayOfArgsEnvoyedParLeClient[BRIConst::MSG_IN_REQUETE])) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de requete dans le message");
            return $err;
        }
        $this->logger->debug("::buildFromArray - Test requete implementee");
        if (!in_array ($ArrayOfArgsEnvoyedParLeClient[BRIConst::MSG_IN_REQUETE], $this -> avalaibleRequete)) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - La requete n'est pas implementee");
            return $err;            
        }
       
        
        // recupe de la requete
        $this -> type = $ArrayOfArgsEnvoyedParLeClient[BRIConst::MSG_IN_TYPE];

        // recupe de la requete
        $this -> requete = $ArrayOfArgsEnvoyedParLeClient[BRIConst::MSG_IN_REQUETE];
        
        // recup des args
        $this->logger->debug("::buildFromArray - Test args");
        if (isset ($ArrayOfArgsEnvoyedParLeClient[BRIConst::MSG_IN_ARGS])) {
            if (is_array($ArrayOfArgsEnvoyedParLeClient[BRIConst::MSG_IN_ARGS])) {
                foreach ($ArrayOfArgsEnvoyedParLeClient[BRIConst::MSG_IN_ARGS] as $OneArrayValue) {
                    foreach ($OneArrayValue as $key => $value) {
                        $this->args[$key]=$value;                        
                    }
                }          
            }
            else {
                $err = new BRIError (5, "BRIWSMessageClient2Server - args n'est pas un tableau");
                return $err;                            
            }
        }
        
        // check
        $this->logger->debug("::buildFromArray - Parsing result ==>".$this->toString());
        $this->logger->debug("::buildFromArray - REturn OK");
        return BRIError::S_OK();
    }
    
    public function cleanInput() {
        return true;
    }

    public function validateInputMessage() {
        if ((strcmp($this->requete, 'none') != 0) && (strcmp($this->type, 'none') != 0))
                return true;
        return false;
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

