<?php
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/modele/BRIUser.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/WS/iBRIWSApi.php';

class BRIWSUserApi extends iBRIWSApi
{

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct($className = "BRIWSUserApi")
    {
        parent::__construct($className);
        $this->logger = new BRILogger($className);
    }

    function executeRequest($msgIN)
    {
        $err = new BRIError(0);

        $user = new BRIUser();
        switch ($msgIN->requete) {
            case "user_init_passwd":
                $err = $user->user_init_passwd($msgIN);
                break;
            default:
                $err = BRIError::E_NOIMPL();
                break;
        }

        return $err;
    }

    function user_init_passwd($msgIN)
    {
        if (! isset($msgIN->args['email']))
            return new BRIError(77, "Email est mandatory pour un reset de password");
        $email = $msgIN->args['email'];

        $err = $this->getUserByEmail($email);
        if (! $err->SUCCEEDED())
            return new BRIError(77, "Email ne corresponsd a rien en base");

        $err = $this->generatedTagForResetpwd();
        if (! $this->SUCCEEDED())
            return new BRIError(77, "Email ne corresponsd a rien en base");

        $err = $this->sendURLForReset();
        if (! $this->SUCCEEDED())
            return new BRIError(77, "Impossible d'envoye le mail pour resetter le password");

        return BRIError::S_OK();
    }
}
?>


