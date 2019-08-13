<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of BRINls
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'] . 'Bricolage2/server/tools/BRILogger.php';
class BRINls {
    private $logger = null;
    static  $json = null;

    public function __construct() {
        $this -> logger = new BRILogger("BRINls");
    }

    static private function _init () {
        $pathtofile = $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/NLS/BRINLS_ALL_MESSAGE.json';
        $json_file = file_get_contents($pathtofile);
        self::$json = json_decode($json_file,true);
    }
    
    
    /* return la valeur d'un TAG NLS sans variable dans le message */
    static public function get($tag) {
        $tab = [];
        $nls = new BRINls();
        return $nls -> _private_getPT($tag, $tab);
    }

    /* return la valeur d'un TAG NLS avec des parametres dans le message */
    static public function getP($tag, $replace) {
        $tab = $replace;
        if (!is_array($replace)) {
            $tab = array();
            array_push($tab, $replace);
        }
        $nls = new BRINls();
        return $nls -> _private_getPT($tag, $tab);
    }

    private function _private_getPT($tag, $replace) {
        if (self::$json == null)
            self::_init ();
        
        // $this -> logger ->debugTab("_private_getPT:: JSON = ", self::$json);
        
        if (!isset (self::$json[$tag])) {
            $s = '*** BRINls TAG KO: recheche KO de '.$tag;
            return $s;
        }

        $s = self::$json[$tag];
        $this -> logger ->debug ("eNLS:".$s);

        if (count ($replace) > 0) {
            $patterns = array();
            $replacements = array();
            for ($i = 0; $i < count ($replace); $i++) {
                $patterns[$i] = '/\$'.($i+1).'/';
                $replacements[$i] = $replace[$i];
            }
            $this -> logger ->debugTab ("pattern: ", $patterns);
            $this -> logger ->debugTab ("replacements: ", $replacements);
            $s = preg_replace($patterns, $replacements, $s);
        }
        $s = '[NLS]'.$s;
        return $s;
    }
}



