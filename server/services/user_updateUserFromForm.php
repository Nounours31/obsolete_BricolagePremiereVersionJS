<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cUser.php';

$secu = new cSecurite();
$secu -> Check();

$loger = new Traces('updateUserFromForm::Startter');
$loger ->debug("Step into updateUserFromForm");

$respIn = JSONTools::fromInputJSON();
$loger ->debugTab("Json Input", $respIn);




function UpdateFromUser($resp) {
    $Local_loger = new Traces('updateUserFromForm::UpdateFromUser ');
    $user = new cUser();
    $userLogged = $user -> getUserId($_COOKIE[ENVT::COOKIE_LOGGING]);
    $Local_loger ->debug("User is :".$userLogged);
    $Local_loger ->debugTab("Inputs are :", $resp);
    
    $infos = array();
    $password = "";
    $password1 = "";
    $password2 = "";
    foreach ($resp as $key => $value) {
        if (strcmp ($key, "password-new") == 0) {
                $password1 = $value;
        }
        else if (strcmp ($key, "password-new2") == 0) {
                $password2 = $value;
        }
        else if (strcmp ($key, "password") == 0) {
                $password = $value;
        }
        else {
            $infos[$key] = $value;
        }
    }

    // ------------------------------------------------------
    // check password si j'envoie un password quelconque il doit y avoir $password $password1 et $password2
    // ------------------------------------------------------
    $isPasswordToSet = false;
    if ((strlen($password) > 0) || (strlen($password1) > 0) || (strlen($password2) > 0)) {
        $isPasswordToSet = true;
        $myTest = ((strlen($password) > 0) && (strlen($password1) > 0) && (strlen($password2) > 0));
        if (!$myTest) {
            $rc = cError::E_FAIL();
            $rc ->setMessage("Pas de password envoye");
            echo JSONTools::toJSONErr($rc);        
            exit();                    
        }
    }
    
    // ------------------------------------------------------
    // sans l'userId je ne peux rien faire
    // ------------------------------------------------------
    if (!isset ($infos['uid'])) {
        $rc = cError::E_FAIL();
        $rc ->setMessage("Pas de UID envoye");
        echo JSONTools::toJSONErr($rc);        
        exit();        
    }
    
    // ------------------------------------------------------
    // est ce que le password envoye est correct ?
    // ------------------------------------------------------
    if ($isPasswordToSet) {
        $rc = $user ->validateUserFromIdAndPassword ($infos['uid'], $password);
        if (!cError::SUCCEEDED($rc)) {
            echo JSONTools::toJSONErr($rc);        
            exit();
        }
    }
    unset($infos['password']);
    unset($infos['passwdMD5']);
    
    // ------------------------------------------------------
    // est ce que le nouveau password envoye est correct ?
    // ------------------------------------------------------
    if ($isPasswordToSet) {
        if (strcmp ($password1, $password2) != 0) {
            $err = new cError(98);
            $err ->setMessage("password new invalide");
            echo JSONTools::toJSONErr($rc);        
            exit();
        }
        if (strlen($password1) > 0 ) {
            $infos['passwdMD5'] = $password1;
        }
    }

     
    // ------------------------------------------------------
    // 
    // ------------------------------------------------------
    $Local_loger ->debugTab("*************************** Update User :", $infos);
    $rc = $user -> updateUser ($userLogged, $infos);
    if (cError::SUCCEEDED($rc)) {
        echo JSONTools::toJSONMsg("Update OK");
        exit();
    }
    else {
        echo JSONTools::toJSONErr($rc);        
        exit();
    }
}

function UpdateFromAdmin($resp) {
    $Local_loger = new Traces('updateUserFromForm::UpdateFromAdmin ');
    $db = new DBTableUser();
    $userId = $resp['uid'];
    $arrayAttr = array();
    if (isset($resp['nom'])) $arrayAttr['nom'] = $resp['nom'];
    if (isset($resp['prenom'])) $arrayAttr['prenom'] = $resp['prenom'];
    if (isset($resp['alias'])) $arrayAttr['alias'] = $resp['alias'];
    if (isset($resp['email'])) $arrayAttr['email'] = $resp['email'];
    if (isset($resp['emailperso'])) $arrayAttr['emailperso'] = $resp['emailperso'];
    $db -> updateUserFromArrayData ($userId, $arrayAttr);

    if (isset ($resp['roles'])) {
        $db = new DBTableRole();
        $aInfoRole = array();
        foreach ($resp['roles'] as $value) {
            $Local_loger ->debugTab("UnRole -->>", $value);
            if ($value[1]) {
                $aInfoRole[$value[0]] = $value[1];
            }
        }
        $Local_loger ->debugTab("allRole -->>", $aInfoRole);
        $db ->addUserRole($aInfoRole, $userId);
    }
}

if ($respIn !== FALSE) {
    if (isset ($respIn['updatefromadmin'])) {
        UpdateFromAdmin($respIn);
    }
    else {
        UpdateFromUser($respIn);
    }
}
?>