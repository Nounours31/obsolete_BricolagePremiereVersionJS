<?php
include_once '../Envt/BRIENVT.php';
include_once '../modele/BRIUser.php';
include_once '../tools/BRILogger.php';

include_once './iBRIWSMessageIN.php';


$userApi = new BRIUser ();
$rc = $userApi ->lightCheck(); // le user n'est pas connecte il n'y a pas grand chose a faire
$rc -> Dump();

if (BRIError::SUCCEEDED($rc)) {
    $msgIn = $userApi -> decodeInput();
    $msgIn -> Dump();
}
?>

