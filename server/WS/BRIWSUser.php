<?php
include_once '../Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBTableUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Debug.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cUser.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cPasswordManagement.php';


//---------------------------------------------
// Recup du body de le requete
//---------------------------------------------
$secu = new BRISecurite();
$rc = $secu ->lightCheck(); // le user n'est pas connecte il n'y a pas grand chose a faire
if (BRIError::SUCCEEDED($rc)) {
    $useApi = new BRIWSUser ();
    $aINPUTS = $useApi -> decodeInput($_POST, );

    
}

$id = $_POST['id'];
$passwd = $_POST['password1'];
$redirect = $_POST['redirectURL'];

    $pwdMngt = new cPasswordManagement();
    $rc = $pwdMngt -> checkIdValide ($id);
    if ($rc !== TRUE) {
        $err = new cError(500);
        $err ->setMessage('Id invalide ou expiree');
        $err -> Dump();
        echo JSONTools::toJSONErr($err);
    }
    else {
        $idUser = $pwdMngt -> valideId ($id);
        
        $user = new cUser();
        $user -> updatePassword($idUser, $passwd);

        $info = $user -> setCurrentUserById ($idUser);
        $secu = new cSecurite();
        $secu -> updateCookies($info[ENVT::COOKIE_LOGGING], $info[ENVT::COOKIE_CSRF]);

        $url = 'Location: '.$redirect; 
        $replace = true;
        $http_response_code = '302';
        header($url, $replace, $http_response_code);   
        exit();
    }    
?>

