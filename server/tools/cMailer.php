<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of cMailer
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/iSendMail.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/tools/BRITools.php';


class cMailer extends iSendMail {
    private $_to;
    private $_cc;
    private $_bcc;
    private $_subject;
    private $_body;
    private $_logger;

    public function __construct() {
        $this -> _to = [];
        $this -> _cc = [];
        $this -> _bcc = [];
        $this -> _subject = "no subject";
        $this -> _body = "no body";
        $this->_logger = new BRILogger('cMailer');
    }
    
    public function __destruct() {
    }
    

    private function _sendMail() {
        parent::sendMail($this -> _to, $this ->  _cc, $this -> _subject, $this -> _body);
    }

    public static function sendMailToMultipleUserEmail($listEMailUser, $subject, $body) {
        $x = new cMailer();
        $x -> _subject = $subject;
        $x -> _body = $body;
        if (!is_array($listEMailUser)) {
            $a = array();
            array_push($a, $listEMailUser);
            $listEMailUser = $a;
        }
        foreach ($listEMailUser as $value) {
            $x -> _to[$value] = $value;
        }
        return $x -> _sendMail();
    }

    
    
    public static function sendMailToAdmin($subject, $body) {
        $listUser = array();
        $users = new BRIUser();
        $aAdmins = $users -> getAdministrators();
        foreach ($aAdmins as $value) {
            $email = $users -> getEmail($value);
            array_merge ($listUser, $email);
        }
        return cMailer::sendMailToMultipleUserEmail($listUser, $subject, $body);
    }
    
    public static function sendMailToAdminUser($subject, $body) {
        $listUser = array();
        $users = new cUser();
        $aAdmins = $users -> getAdminUser();
        foreach ($aAdmins as $value) {
            $email = $users -> getEmail($value);
            array_merge ($listUser, $email);
        }
        return cMailer::sendMailToMultipleUserEmail($listUser, $subject, $body);
    }

    public static function sendMailToAdminMateriel($subject, $body) {
        $listUser = array();
        $users = new cUser();
        $aAdmins = $users -> getAdminMateriel();
        foreach ($aAdmins as $value) {
            $email = $users -> getEmail($value);
            array_merge ($listUser, $email);
        }
        return cMailer::sendMailToMultipleUserEmail($listUser, $subject, $body);
    }

    public static function sendMailToAdminSortie($subject, $body) {
        $listUser = array();
        $users = new cUser();
        $aAdmins = $users -> getAdminSortie();
        foreach ($aAdmins as $value) {
            $email = $users -> getEmail($value);
            array_merge ($listUser, $email);
        }
        return cMailer::sendMailToMultipleUserEmail($listUser, $subject, $body);
    }

    public static function sendMailToOneUserEmail($userEMail, $subject, $body) {
        $listUser = array();
        array_push ($listUser, $userEMail);
        return cMailer::sendMailToMultipleUserEmail($listUser, $subject, $body);
    }

    public static function sendMailToOneUserUid($userUid, $subject, $body) {
        $listUser = array();
        array_push ($listUser, $userUid);
        return cMailer::sendMailToMultipleUser($listUser, $subject, $body);
    }

    public static function sendMailToMultipleUserUid($listUidUser, $subject, $body) {
        $listEMailUser = array();
        $users = new cUser();
        foreach ($listUidUser as $value) {
            array_merge($listEMailUser, $users -> getEmail($value));
        }        
        return cMailer::sendMailToMultipleUserEmail($listEMailUser, $subject, $body);
    }   
}
