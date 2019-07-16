<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DBTableRole
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Tools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/iDBAccess.php';

class DBTableRole extends iDBAccess {  
    const ADMINISTRATOR = 1;
    const ADMIN_USER = 7;
    const ADMIN_SORTIE = 2;
    const ADMIN_MATERIEL = 6;

    
    public function __construct() {
        parent::__construct();
        $this -> _DBName = self::_DBNameUsers;
        $this -> _logger -> prefix ($this -> _DBName);
    }

    public function __destruct() {
        parent::__destruct();
    }
    
    public function addUserRole($aInfoRole, $uid) {    
        // ----------------------------------------------
        // Update des role 
        // ----------------------------------------------
        $sql = "delete from ".self::_DBNameUserRole." where (uiduser=".$uid.")";
        $this ->deleteAsRest($sql);
        
        $log = array();
        foreach ($aInfoRole as $key => $value) {
            $sql = "insert into ".self::_DBNameUserRole." (uiduser, uidrole) "
                        . "select ".$uid." as uiduser, uid as uidrole from ".self::_DBNameRole."  where (role = '".$key."')";
           $rc = $this ->insertAsRest($sql);
           array_push($log, $rc);
        }
        $ret = array();
        $ret['log'] = 'Insert fait';
        $ret['uid'] = $log;
        return $ret;
    }


    public function getAdministrators() {
        $sql = "select uiduser from ".self::_DBNameUserRole." where (uidrole=".self::ADMINISTRATOR.")";
        $rc = $this->selectAsRest($sql);
        $aRetour = array();
        foreach ($rc as $value) {
            array_push($aRetour, $value['uiduser']);
        }
        return $aRetour;
    }

    public function getAdminUser() {
        $sql = "select uiduser from ".self::_DBNameUserRole." where (uidrole=".self::ADMIN_USER.")";
        $rc = $this->selectAsRest($sql);
        $aRetour = array();
        foreach ($rc as $value) {
            array_push($aRetour, $value['uiduser']);
        }
        $rc = $this -> getAdministrators();
        foreach ($rc as $value) {
            array_push($aRetour, $value);
        }        
        return $aRetour;
    }

    public function getAdminMateriel() {
        $sql = "select uiduser from ".self::_DBNameUserRole." where (uidrole=".self::ADMIN_MATERIEL.")";
        $rc = $this->selectAsRest($sql);
        $aRetour = array();
        foreach ($rc as $value) {
            array_push($aRetour, $value['uiduser']);
        }
        $rc = $this -> getAdministrators();
        foreach ($rc as $value) {
            array_push($aRetour, $value);
        }        
        return $aRetour;
    }

    public function getAdminSortie() {
        $sql = "select uiduser from ".self::_DBNameUserRole." where (uidrole=".self::ADMIN_SORTIE.")";
        $rc = $this->selectAsRest($sql);
        $aRetour = array();
        foreach ($rc as $value) {
            array_push($aRetour, $value['uiduser']);
        }

        $rc = $this -> getAdministrators();
        foreach ($rc as $value) {
            array_push($aRetour, $value);
        }        
        return $aRetour;
    }
    
    public function getAllRoles() {
        $sql = "select role from ".self::_DBNameRole;
        $rc = $this->selectAsRest($sql);
        $aRetour = array();
        foreach ($rc as $value) {
            array_push($aRetour, $value['role']);
        }
        return $aRetour;
    }
}