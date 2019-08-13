<?php

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIEnvt.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/modele/iBRIModel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/DB/BRIDBTableUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/DB/BRIDBTableUserInvitation.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/DB/BRIDBTableUserMembreSection.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRIUID.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/cMailer.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/NLS/BRINls.php';


class BRIUser extends iBRIModel { 
    private $_DBUser = null;
    private $_DBUserInvitation = null;
    private $_logger = null;
    
    public function __construct($info) {
        parent::__construct($info);
        $this -> _DBUser = new BRIDBTableUser();
        $this -> _DBUserInvitation = new BRIDBTableUserInvitation();
        $this -> _DBUserMembreSection = new BRIDBTableUserMembreSection();
        $this -> _logger = new BRILogger("BRIUser");
    }
    
    public function __destruct() {
    }
    
    
    /**************************************************************************************************
     * Fonctions administratives
    ****************************************************************************************************/
    public function getAdministrators () {
        return $this -> _DBUserMembreSection -> getAdministratorUID();
    }

    public function getEmailUser ($user) {
        return $this -> _DBUser ->getEmail($user);
    }



    public function getUserByEmail($email)
    {
        return $this -> _DBUser ->existAUserWithThisEmail($eMail);
    }

    /**************************************************************************************************
     * Fonctions complexe
    ****************************************************************************************************/
    
    /**************************************
     * Init et reset des mot de passe user
     **************************************/
    function init_passwd($email, &$referenceMsgOut)
    {
        $this -> _logger -> debug("Step Into::init_passwd Email:".$email);
        if (! isset($email))
            return new BRIError(77, "Email est mandatory pour un reset de password");

        // -----------------------------------
        // Un user avec ce mail?
        // -----------------------------------
        $requete = $this -> _DBUser -> existAUserWithThisEmail($email);
        $this -> _logger ->debugTab("Find emails: ", $requete);
        if (!is_array($requete) || !isset ($requete[0]) || !isset ($requete[0][BRIDBTableUser::_DBUser_email])) {
            return new BRIError(77, "Email ne corresponsd a rien en base");
        }
        
        if (count ($requete) != 1)
            return new BRIError(78, "Plus d'un user a cet email - je ne peux rien faire");
        
       
        $email = $requete[0][BRIDBTableUser::_DBUser_email];
        $userId = $requete[0][BRIDBTableUser::_DBUser_UID];
        
        $err = $this->generatedTagForResetpwd($tag, $guid);
        $this -> _logger ->debug("URL reset pwd: ".$tag);
        if (! $err->SUCCEEDED())
            return new BRIError(79, "Email ne corresponsd a rien en base");

        $err = $this->sendURLForReset($tag, $guid, $userId, $email);
        if (! $err->SUCCEEDED())
            return new BRIError(81, "Impossible d'envoye le mail pour resetter le password");

        return BRIError::S_OK();
    }

    private function generatedTagForResetpwd(&$tag, &$uid)
    {
        $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http");
        $actual_link .= "://".$_SERVER['HTTP_HOST'];
        $actual_link .= "/".BRIEnvt::relativeWSPath;

        $uid = BRIUID::guid();

        $tag = $actual_link."?id=".$uid."&from=web&tag=".date("U");
        $this -> _logger ->debug("generatedTagForResetpwd:: tag:".$tag);
        return BRIError::S_OK();
    }

    private function sendURLForReset($tag, $guid, $uidUser, $email)
    {
        $this -> _DBUserInvitation ->addInvitation($guid, $uidUser);
        
        $l = $this -> getAdministrators();
        $this -> _logger ->debugTab("sendURLForReset::Getadministrators: ", $l);
        
        $emails = $this->getEmailUser($l);
        $this -> _logger ->debugTab("sendURLForReset::GetadministratorsEmails: ", $emails);
        array_push ($emails, $email);
        
        $subject= BRINLs::get("INIT_PASSWD_MAIL_SUBJECT");
        $a = array();
        array_push($a, $tag);
        $body= BRINLs::getP("INIT_PASSWD_MAIL_BODY", $a);
        
        cMailer::sendMailToMultipleUserEmail($emails, $subject, $body);
        return BRIError::E_FAIL();
    }
}
