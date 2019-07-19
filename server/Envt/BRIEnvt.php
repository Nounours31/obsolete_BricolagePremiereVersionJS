<?php
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
ini_set('display_errors', 'on');

include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIConst.php';

class BRIEnvt {
    const isLOCALSERVER = true;
    const _DEBUGLEVEL = BRIConst::_ALL;
    
    public static function getSitePath () {
        return $_SERVER['DOCUMENT_ROOT'].'site/';
    }

    public static function getDebugLevel () {
        return self::_DEBUGLEVEL;
    }
        
    public static function getPHPCodePath () {
        return BRIConst::getSitePath.'php/';
    }
    
    
    public static function getTraceDir() {
        return BRIConst::tracePATHTODISK; 
    }
    public static function getTraceFile() {
        return BRIConst::traceFILE; 
    }
}
