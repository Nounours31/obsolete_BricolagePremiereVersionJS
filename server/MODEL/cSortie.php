<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of cSortie
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/MODEL/cError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php';
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBSortie.php';

class cSortie {
    public function __construct() {
    }
    
    public function __destruct() {
    }

    static function listSorties() {
        $s = new DBSortie();
        return $s->listSorties();
    }

    static function infoUneSortie($uid) {
        $s = new DBSortie();
        return $s->getInfoUneSortie($uid);
    }

    static function SetInfoUneSortie($uid, $infos) {
        $s = new DBSortie();
        return $s->SetInfoUneSortie($uid, $infos);
    }
    
    static function SetParticipantUneSortie($uid, $infos) {
        $s = new DBSortie();
        return $s->SetParticipantUneSortie($uid, $infos);
    }
    static function SetParticipantUneSortieNew($uidUsers, $uidSortie, $liee, $UIDLien) {
        $s = new DBSortie();
        return $s->SetParticipantUneSortieNew($uidUsers, $uidSortie, $liee, $UIDLien);
    }

    

	

    static function GetParticipantUneSortieForTable($uid) {
        $s = new DBSortie();
        return $s->GetParticipantUneSortieForTable($uid);
    }

    static function GetParticipantUneSortie($uid) {
        $s = new DBSortie();
        return $s->GetParticipantUneSortie($uid);
    }
    
    static function removeParticipant ($uidUser, $uidSortie) {
        $s = new DBSortie();
        return $s->removeParticipant($uidUser, $uidSortie);
    }
    
    static function addSortie ($nomSortie, $uidOrga, $datedeb, $datefin, $uidOptionels) {
        $s = new DBSortie();
        return $s->addSortie ($nomSortie, $uidOrga, $datedeb, $datefin, $uidOptionels);
    }
    
    static function SetDescriptionUneSortie ($uid, $desc) {
        $s = new DBSortie();
        return $s->SetDescriptionUneSortie ($uid, $desc);
    }
    
    
}