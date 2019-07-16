<?php
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cSortie.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/JSONTools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';

$secu = new cSecurite();
$secu -> Check();


$logger = new Traces('sortie_saveSortieDescriptionToDB');
$logger ->debug('Info de la sortie:');

$logger ->debugTab("Entree POST", $_POST);
$logger ->debugTab("Entree REQUEST", $_REQUEST);
$logger ->debugTab("Entree FILES", $_FILES);

if (!isset($_POST) && (!isset($_POST['idSortie']))) {
    $err = cError::E_FAIL();
    $err ->setMessage("No Idsortie");
    echo JSONTools::toJSONErr($err);
}
    

// -----------------------------------------------------------------
// ex:  [<TAG_FORM> : [[name : {blob}][type : {text/xml}][tmp_name : {E:\wamp\tmp\phpA577.tmp}][error : {0}][size : {775}]]]
// 
// The original name of the file on the client machine.
// $_FILES['<TAG_FORM>']['name']);
// 
// // basename() may prevent filesystem traversal attacks;
   // further validation/sanitation of the filename may be appropriate
   // $name = basename($_FILES["pictures"]["name"][$key]);
   // move_uploaded_file($tmp_name, "data/$name");
//
// The mime type of the file, if the browser provided this information. An example would be "image/gif". This mime type is however not checked on the PHP side and therefore don't take its value for granted.
// $_FILES['<TAG_FORM>']['type']
//
// The size, in bytes, of the uploaded file.
// $_FILES['<TAG_FORM>']['size']
//
// The temporary filename of the file in which the uploaded file was stored on the server. 
// $_FILES['<TAG_FORM>']['tmp_name']
//
// The error code associated with this file upload.
// $_FILES['<TAG_FORM>']['error']
// -----------------------------------------------------------------
if ($_FILES['ajax_txtdata_tosend']['error'] == 0) {
    if (is_uploaded_file($_FILES['ajax_txtdata_tosend']['tmp_name'])) {
       $logger ->debug("File ". $_FILES['ajax_txtdata_tosend']['name'] ." uploaded successfully.\n");
       $logger ->debug("Displaying contents\n");
       $decriptionSortie = file_get_contents($_FILES['ajax_txtdata_tosend']['tmp_name']);
       $logger ->debug($decriptionSortie);
       cSortie::SetDescriptionUneSortie($_POST['idSortie'], $decriptionSortie);
    } else {
       $logger ->debug( "Possible file upload attack: ");
       $logger ->debug( "filename '". $_FILES['ajax_txtdata_tosend']['tmp_name'] . "'.");
    }
}
else {
    $err = cError::E_FAIL();
    $err ->setMessage("No sortie data");
    echo JSONTools::toJSONErr($err);
}
?>