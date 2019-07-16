<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Debug
 *
 * @author PFS
 */
include_once($_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/ENVT/ENVT.php');

class Debug {
    const _DEBUGLEVEL = ENVT::_DEBUGLEVEL;

    function __construct() {
    }

    function __destruct() {
    }

    public static function getCurrentLevel() {
        return self::_DEBUGLEVEL;
    }
}
