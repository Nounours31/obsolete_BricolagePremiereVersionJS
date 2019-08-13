<?php
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/WS/iBRIWSApi.php';


/*********************************************************************************************
 * Classe de gestion WS des resa
 ********************************************************************************************/
class BRIWSApiResa extends BRIWSApi
{

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct($className = "BRIWSApiResa")
    {
        parent::__construct($className);
        $this->logger = new BRILogger($className);
    }

    function executeRequest($msgIN, &$referenceMsgOut)
    {
        $err = new BRIError(0);


        return $err;
    }

    function user_init_passwd($msgIN)
    {
        $err = new BRIError(0);

        return $err;
    }

}
?>


