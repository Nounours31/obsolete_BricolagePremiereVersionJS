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
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/iSendMail.php';
class cMailer extends iSendMail {
    public function __construct() {
    }
    
    public function __destruct() {
    }
    
    public static function sendMailToAdmin($subject, $body) {
        $listUser = array();
        $users = new cUser();
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
    
    public static function sendMailToMultipleUserEmail($listEMailUser, $subject, $body) {
        $to = array();
        foreach ($listEMailUser as $value) {
            $to[$value] = $value;
        }
        $cc['pfs@3ds.com'] = 'Nounours';
        return cMailer::sendMail($to, $cc, $subject, $body);
    }
}
