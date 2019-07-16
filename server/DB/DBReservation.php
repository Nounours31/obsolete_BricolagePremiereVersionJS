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
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/DB/iDBAccess.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/DB/DBTableUser.php';

class DBReservation extends iDBAccess {
    public function __construct() {
        parent::__construct();
        $this -> _DBName = 'DBReservation';
    }

    public function __destruct() {
        parent::__destruct();
    }



    public function getListeReservationAsync() {
        $sql = "select mr.uid as uidresa, mr.debut, mr.fin, mr.dateresa, u.uid as uiduser, u.nom as usernom, m.uid as uidmateriel, m.nom as matosnom from  mr, users u, materiel m "
                . " where ((mr.uiduser = u.uid) and (mr.uidmateriel = m.uid))";
        $rc = $this->selectAsRest($sql);
        if (empty($rc)) {
            $rc = array();
            return $rc;
        }
        // conversion des date en date  format ISO 8601
        for ($i = 0; $i < count ($rc); $i++) {
            if (isset($rc[$i]['debut'])) $rc[$i]['debut'] = date ('c', strtotime($rc[$i]['debut']));
            if (isset($rc[$i]['fin'])) $rc[$i]['fin'] = date ('c', strtotime($rc[$i]['fin']));
            if (isset($rc[$i]['dateresa'])) $rc[$i]['dateresa'] = date ('c', strtotime($rc[$i]['dateresa']));
        }
        $this->_logger ->debugTab("getListeReservationAsync -- format horaire ==== FINAL", $rc);
        return $rc;
    }
    
    public function sendReservationToDBAsync($start, $end, $user, $uidmateriel) {
        $sql = "insert into ".self::_DBNameMaterielReservation." (debut, fin, uiduser, uidmateriel, dateresa) values "
                . "('".date("Y-m-d", $start)."', '".date("Y-m-d", $end)."', ".$user.", ".$uidmateriel.", '".date("Y-m-d H:i:s")."')";
        
        $rc = $this->insertAsRest($sql);
        if (empty($rc)) {
            $rc = array();
            return $rc;
        }
        return $rc;        
    }
}
