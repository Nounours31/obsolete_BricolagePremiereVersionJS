<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/DB/DBTableUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cPasswordManagement.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Debug.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/Model/cMailer.php';


//---------------------------------------------
// Recup du body de le requete
//---------------------------------------------
$resp = JSONTools::fromInputJSON();
$err = cError::E_FAIL();

if ($resp !== FALSE) {
    $user = new cUser();
    $connectURL = $resp['connectURL'];

    $rc = $user -> existAUserWithThisEmail ($resp['eMail']);
    if ($rc !== false) {
        $userId = $rc[0]['uid'];
        $userMail = $resp['eMail'];
        
        $pwdMngt = new cPasswordManagement();
        $rc = $pwdMngt ->insertNouvelleDemande($userId, $userMail);
        if ($rc !== FALSE) {
            $UUID = $rc;
            $to = array();
            $to[$userMail] = 'x y';
            $to['pfs@3ds.com'] = 'Nounours';
            $subject = "Lien pour la mise à jour de votre mot de passe sur le site de la section DSSP";
            // $subject = base64_encode($subject);
            
            $txt = '<html>
                        <head>
                            <title>HTML email</title>
                        </head>
                        <body>
                            <p>Lien vers l\'URL de votre changement de mot de passe</p>
                            <a href="'.$connectURL.'?id='.$UUID.'"> cliquer sur ce lien pour reinitialiser votre mot de passe </a>
                        <body>
                    <html>';
            $err = cMailer::sendMailToMultipleUserEmail($to,$subject,$txt);
        }
        else {
            $err = new cError (9900);
            $err ->setMessage('cPasswordManagement::insertNouvelleDemande - Impossible de demander le changement de mot de passe');
        }
    }
    else {
        $err = new cError(9000);
        $err ->setMessage('Impossible de trouver un utilisateur avec ce mail en DB');
    }
    print (JSONTools::toJSONErr($err));
}
?>
