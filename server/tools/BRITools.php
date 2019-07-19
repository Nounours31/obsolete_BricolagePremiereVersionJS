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
class BRITools {
    public static function arrayToString($array) {
        $s = "";
        if (!is_array($array))
            return $array;
        
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $r = BRITools::arrayToString($value);
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
    
    public static function GenerateJSONErrorMessage($errno, $l) {
        switch ($errno) {
        case JSON_ERROR_NONE:
            $l -> fatal (' - Aucune erreur');
            break;
        case JSON_ERROR_DEPTH:
            $l -> fatal ( ' - Profondeur maximale atteinte');
            break;
        case JSON_ERROR_STATE_MISMATCH:
            $l -> fatal ( ' - Inadéquation des modes ou underflow');
            break;
        case JSON_ERROR_CTRL_CHAR:
            $l -> fatal ( ' - Erreur lors du contrôle des caractères');
            break;
        case JSON_ERROR_SYNTAX:
            $l -> fatal ( ' - Erreur de syntaxe ; JSON malformé');
            break;
        case JSON_ERROR_UTF8:
            $l -> fatal ( ' - Caractères UTF-8 malformés, probablement une erreur d\'encodage');
            break;
        default:
            $l -> fatal ( ' - Erreur inconnue');
            break;
        }
    }
    
}
