<?php
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/modele/BRIUser.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/WS/iBRIWSApi.php';

/*********************************************************************************************
 * Classe de gestion WS des Users
 ********************************************************************************************/
class BRIWSApiUser extends BRIWSApi
{

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct($className = "BRIWSApiUser")
    {
        parent::__construct($className);
        $this->logger = new BRILogger($className);
    }

    function executeRequest($msgIN, &$referenceMsgOut)
    {
        $err = new BRIError(0);
        $user = new BRIUser("pipo");
        switch ($msgIN->getRequete()) {
            case "init_passwd":
                if (!$msgIN->hasArgs('email'))
                    return new BRIError(3, 'Missing argument email to process user_init_passwd');
                $err = $user->init_passwd($msgIN->getargs('email'), $referenceMsgOut);
                break;
            default:
                $err = BRIError::E_NOIMPL();
                break;
        }
        return $err;
    }

    function user_init_passwd($msgIN)
    {
        $err = new BRIError(0);
        $user = new BRIUser("pipo");
        switch ($msgIN->getRequete()) {
            case "init_passwd":
                $err = $user->user_init_passwd($msgIN->args['email']);
                break;
            default:
                $err = BRIError::E_NOIMPL();
                break;
        }

        return $err;
    }

}
?>


