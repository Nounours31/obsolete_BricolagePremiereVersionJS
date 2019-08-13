<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of cSendMail
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/tools/BRIError.php';

include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/thirdPty/PHPMailer/src/PHPMailer.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/thirdPty/PHPMailer/src/Exception.php';


abstract class iSendMail {
    protected static function sendMail($aTo, $aCC, $subject, $htmlBody) {
        $err = BRIError::S_OK();
        $log = new BRILogger('iSendMail.php');
       
        // ----------------------------------------------
        // conf du server de mail a changer selon le SMTP utilise
        // ----------------------------------------------
        $mail = new PHPMailer\PHPMailer\PHPMailer(); // crée un nouveau objet
        $mail-> CharSet = 'UTF-8';
        $mail->IsSMTP(); 
        $mail->SMTPDebug = 2;
        $mail->IsHTML(true);
        $mail->SMTPAuth = true; // authentication
        $mail->SMTPSecure = 'ssl'; // secure transfer enabled requis pour Gmail
        $mail->Host = BRIENVT::SMTP_Server;
        $mail->Port = BRIENVT::SMTP_Port; // Port ssl de gmail
        $mail->Username = BRIENVT::SMTP_AuthenticateUser; // Identifiant smtp
        $mail->Password = BRIENVT::SMTP_AuthenticatePassword;    // Mot de passe smtp
        $mail->SetFrom("code.fages@gmail.com", BRIENVT::SMTP_User); // Adresse qui envoie
        

        // -----------------------------------------------------
        // le mail
        // -----------------------------------------------------
        if (BRIEnvt::_DEBUGMAIL) {
            $mail->AddAddress(BRIEnvt::_DEBUGMAIL_EMAIL, 'Nounours');    
        }
        else {
            if (!array_key_exists('pfs@3ds.com', $aCC))
                $aCC['pfs@3ds.com'] = 'The Nounours';
        

            if (isset($aTo) && (count ($aTo) > 0)) {
                foreach ($aTo as $key => $value) {
                    $mail->AddAddress($key, $value);           
                }
            }
            if (isset($aCC) && (count ($aCC) > 0)) {
                foreach ($aCC as $key => $value) {
                    $mail->addCC($key, $value);           
                }
            }
        }
        $mail->Subject = $subject;  // Sujet du mail
        $mail->Body = $htmlBody;


        // -----------------------------------------------------
        // Et je le pousse
        // -----------------------------------------------------
        if (!$mail->Send()) {
            $err = new BRIError (500, $mail->ErrorInfo);
        } 
        $log ->debugTab('Send mail fait. Err: '.$err ->toString(), $aTo);
        return $err;
    }
}
