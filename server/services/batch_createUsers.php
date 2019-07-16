<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/DB/DBTableUser.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/DB/DBTableRole.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/API/Debug.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/API/Tools.php';


$resp = JSONTools::fromInputJSON();
$logger = new Traces('BATCH-CreateUSERS');

if ($resp !== FALSE) {
    $db = new DBTableUser();
    $dbRole = new DBTableRole();

    $log = array();
    foreach ($resp as $unUser) {
        $aValidUserArray = array();
        $aInfoRole = array('membre' => true);
        $aInfoNotif = array();
        $keysUser = array('nom', 'prenom', 'alias', 'email', 'emailperso');
        $keysNotif = array('notif_section', 'notif_sortie');
        $keysRole = array('admin', 'admin_sortie', 'admin_mat', 'admin_user', 'moniteur', 'bureau');

        // verrue des champs manquant (de ma faute ...)
        if (!array_key_exists('alias', $unUser))         
                $unUser['alias'] = ' ';
        if (!array_key_exists('emailperso', $unUser))    
                $unUser['emailperso'] = ' ';
            

        $onError = false;
        foreach ($keysUser as $key => $value) {
            if (isset($unUser[$value])) {
                $aValidUserArray[$value] = $unUser[$value];
            } else {
                $uuidgen = Tools::UUID();
                $log [$uuidgen] = array();
                $log [$uuidgen]['error'] = "Manque une clef pour cree le user : " . $value;
                $log [$uuidgen]['userInfo'] = $unUser;
                $onError = true;
                break;
            }
        }
        
        if (!$onError) {
            foreach ($keysNotif as $key => $value) {
                if (isset($unUser[$value])) {
                    if (($unUser[$value] === true) && (strcmp($value, 'notif_section') == 0))
                        $aInfoNotif['section'] = true;
                    if (($unUser[$value] === true) && (strcmp($value, 'notif_sortie') == 0))
                        $aInfoNotif['sortie'] = true;
                }
            }
        }
        if (!$onError) {
            foreach ($keysRole as $key => $value) {
                if (isset($unUser[$value])) {
                    if ($unUser[$value] === true)
                        $aInfoRole[$value] = true;
                }
            }
        }
        $logger ->debugTab('Allroles to add -->', $aInfoRole);

        if (!$onError) {
            $ret = $db ->createUser($aValidUserArray);
            if (isset ($ret['uid'])) {
                $uid = $ret['uid'];
                $rc1 = $db -> addUserNotif($aInfoNotif, $uid);
                $rc2 = $dbRole -> addUserRole($aInfoRole, $uid);
                $uuidgen = Tools::UUID();
                $log [$uuidgen] = array();
                $log [$uuidgen]['in'] = $uid;
                $log [$uuidgen]['user'] = $ret;
                $log [$uuidgen]['notif'] = $rc1;
                $log [$uuidgen]['role'] = $rc2;
            }
        }
    }
    print (JSONTools::ArrayToJSON($log));
} else {
    $err = new cError(500);
    print JSONTools::toJSONErr($err);
}
?>
