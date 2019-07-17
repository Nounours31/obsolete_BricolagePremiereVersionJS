<?php
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
ini_set('display_errors', 'on');


/**
 * Description of ENVT
 *
 * @author PFS
 */
include_once('BRIConst.php');

class BRIEnvt {
    const isLOCALSERVER = true;
    const _DEBUGLEVEL = BRIConst::_DEBUG;
    
    public static function getPHPCodePath () {
        return self::getSitePath.'php/';
    }

    public static function getSitePath () {
        return $_SERVER['DOCUMENT_ROOT'].'site/';
    }
}
