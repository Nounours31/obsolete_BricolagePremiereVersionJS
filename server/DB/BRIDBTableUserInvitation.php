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

class BRIDBTableUserInvitation extends BRIDBAccess {      
    /*
+---------+---------------------------------+------+-----+-------------------+----------------+
| Field   | Type                            | Null | Key | Default           | Extra          |
+---------+---------------------------------+------+-----+-------------------+----------------+ */
	const _DBUserInvit_uid = "uid"; 		// | uid     | int(10) unsigned                | NO   | PRI | NULL              | auto_increment |
	const _DBUserInvit_guid = "guid"; 		// | guid    | text                            | YES  |     | NULL              |                |
	const _DBUserInvit_date = "date"; 		// | date    | datetime                        | NO   |     | CURRENT_TIMESTAMP |                |
	const _DBUserInvit_uidUser = "uidUser"; 	// | uidUser | int(11)                         | YES  |     | NULL              |                |
	const _DBUserInvit_status = "status"; 		// | status  | enum('envoye','consome','autre') | YES  |     | NULL              |                |
    
    public function __construct() {
        parent::__construct();
        $this -> _DBName = self::_DBNameUsersInvitation;
        $this -> _logger = new BRILogger($this -> _DBName);
    }

    public function __destruct() {
        parent::__destruct();
    }

    public function addInvitation ($guid, $uidUser) {
        $sql  = "insert into ".self::_DBNameUsersInvitation;
        $sql .= " (".self::_DBUserInvit_guid.", ".self::_DBUserInvit_date.", ".self::_DBUserInvit_uidUser.", ".self::_DBUserInvit_status.")";
        $sql .= " values";
        $sql .= " ('".$guid."', '".date('Y-m-d H:i:s')."', ".$uidUser.", 'envoye')";

        $rc = $this -> insertAsRest($sql);
        if ($rc === FALSE)
            throw new Exception ("Unable to add invitation in DB");
        
        return;
    }
}
