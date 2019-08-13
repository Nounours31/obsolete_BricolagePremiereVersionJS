<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * MUST NOT BE USE DIRECTLY
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/DB/BRIDBAccess.php';
include_once($_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/tools/BRILogger.php');

class BRIDBTableUserMembreSection extends BRIDBAccess {      
    /*
+---------+---------------------------------+------+-----+-------------------+----------------+
| Field   | Type                            | Null | Key | Default           | Extra          |
+---------+---------------------------------+------+-----+-------------------+----------------+ */
	const _DBUserMembersect_uid = "uid"; 		 // | uid       | int(10) unsigned                                                                             | NO   | PRI | NULL    | auto_increment |
	const _DBUserMembersect_uiduser = "uiduser"; 	 // | uiduser   | int(10) unsigned                                                                             | YES  |     | NULL    |                |
	const _DBUserMembersect_HumanRead = "HumanRead"; // | HumanRead | text                                                                                         | YES  |     | NULL    |                |
	const _DBUserMembersect_role = "role"; 		 // | role      | set('president','tresorier','secretaire','admin','adminOutil','adminUser','adminCompte','-') | YES  |     | NULL    |                |
    
    public function __construct() {
        parent::__construct();
        $this -> _DBName = self::_DBNameUsersemberSection;
        $this -> _logger = new BRILogger($this -> _DBName);
    }

    public function __destruct() {
        parent::__destruct();
    }

    public function getAdministratorUID () {
        $retour = array();
        $sql  = "select ".self::_DBUserMembersect_uiduser;
        $sql .= " from ".$this -> _DBName;
        $sql .= " where ";
        $sql .= " ( find_in_set ('admin', ".self::_DBUserMembersect_role.") or find_in_set ('adminUser', ".self::_DBUserMembersect_role."))";

        $rc = $this -> selectAsRest($sql);
        foreach ($rc as $value) {
            array_push ($retour, $value[self::_DBUserMembersect_uiduser]);
        } 
        return $retour;
    }
}
