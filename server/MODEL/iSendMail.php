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
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/external/PHPMailer/src/PHPMailer.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/external/PHPMailer/src/Exception.php';

include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/API/Traces.php';

abstract class iSendMail {
    protected static function sendMail($aTo, $aCC, $subject, $htmlBody) {
        $err = cError::S_OK();
        $log = new Traces('iSendMail.php');
       
        // ----------------------------------------------
        // conf du server de mail a changer selon le SMTP utilise
        // ----------------------------------------------
        $mail = new PHPMailer\PHPMailer\PHPMailer(); // crée un nouveau objet
        $mail-> CharSet = 'UTF-8';
        $mail->IsSMTP(); 
        $mail->IsHTML(true);
        $mail->SMTPAuth = true; // authentication
        $mail->SMTPSecure = 'ssl'; // secure transfer enabled requis pour Gmail
        $mail->Host = ENVT::SMTP_Server;
        $mail->Port = ENVT::SMTP_Port; // Port ssl de gmail
        $mail->Username = ENVT::SMTP_AuthenticateUser; // Identifiant smtp
        $mail->Password = ENVT::SMTP_AuthenticatePassword;    // Mot de passe smtp
        $mail->SetFrom("code.fages@gmail.com", ENVT::SMTP_User); // Adresse qui envoie
        

        // -----------------------------------------------------
        // le mail
        // -----------------------------------------------------
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

        $mail->Subject = $subject;  // Sujet du mail
        $mail->Body = $htmlBody;


        // -----------------------------------------------------
        // Et je le pousse
        // -----------------------------------------------------
        if (!$mail->Send()) {
            $err = new cError (500);
            $err ->setMessage($mail->ErrorInfo);
        } 
        $log ->debugTab('Send mail fait. Err: '.$err ->toString(), $aTo);
        return $err;
    }
}
