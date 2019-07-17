<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Tools
 *
 * @author PFS
 */
class Tools {
    public static function arrayToString($array) {
        $s = "";
        if (!is_array($array))
            return $array;
        
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $r = Tools::arrayToString($value);
                $s .= '['.$key.' : ['.$r.']]';
            }
            else if (is_object($value)) {
                $r = get_class ($value);
                $s .= '['.$key.' : {obj: '.$r.'}]';
            }
            else {
                $s .= '['.$key.' : {'.$value.'}]';
            }
        }
        return $s;
    }
    

    public static function UUID() {
        $s = uniqid('', true);
        return $s;
    }
    
    public static function isInputsValides($aListInputAttendues, $methode) {
        if (!isset($methode)) return false;
        
        foreach ($aListInputAttendues as $value) {
            if (!array_key_exists($value, $methode))    return false;
            if (!isset ($methode[$value]))              return false;
            if (strlen ($methode[$value]) < 1)          return false;

        }
        return true;
    }
}
