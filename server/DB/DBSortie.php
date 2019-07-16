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

class DBSortie extends iDBAccess {

    public function __construct() {
        parent::__construct();
        $this->_DBName = self::_DBNameSortie;
        $this->_logger->prefix($this->_DBName);
    }

    public function __destruct() {
        parent::__destruct();
    }

    public function listSorties() {
        $sql = "select s.uid, s.nom, s.datedebut, s.datefin, s.organisateur, u.nom as responsable, t.uiduser as coorganisateur, u2.nom as coresponsable "
               ."from ".self::_DBNameSortie." s "
               ."left join ".self::_DBNameUsers." u on (u.uid = s.organisateur)"
               ."left  join ".self::_DBNameSortieOrganisateurSecondaire." t on (t.uidsortie = s.uid)"
               ."left  join ".self::_DBNameUsers." u2 on (u2.uid = t.uiduser)";
        $rc = $this->selectAsRest($sql);
        if (empty($rc)) {
            $rc = array();
            return $rc;
        }

        // --------------------------------------------------------------------------
        // Compactage des reponse au cause des coresponsable multiple d'une sortie
        // --------------------------------------------------------------------------
        $valide = array();
        foreach ($rc as $key => $value) {
            if (!array_key_exists($value['uid'], $valide)) {
                $valide[$value['uid']] = $value;
            } else {
                $valide[$value['uid']]['coorganisateur'] .= (",".$value['coorganisateur']);
                $valide[$value['uid']]['coresponsable'] .= (",".$value['coresponsable']);
            }
        }
        $retour = array();
        foreach ($valide as $value) {
            array_push($retour, $value);
        }
        return $retour;
    }

    public function getInfoUneSortie($uid) {
        $sql = "select s.uid, s.nom, s.datedebut, s.datefin, s.organisateur, u.nom as responsable, i.sortieAsText, i.uid as infoId, t.uiduser as coorganisateur, u2.nom as coresponsable  "
               ." from ".self::_DBNameSortie." s"
               ." inner join ".self::_DBNameUsers." as u on (s.organisateur = u.uid)"
               ." left join  ".self::_DBNameLienSortieDescription." as sld on (sld.uidsortie = s.uid)"
               ." left join  ".self::_DBNameDescriptifSortie." as i on (i.uid = sld.uiddescriptif)"
               ." left join  ".self::_DBNameSortieOrganisateurSecondaire." t on (t.uidsortie = s.uid)"
               ." left join  ".self::_DBNameUsers." u2 on (u2.uid = t.uiduser)"
               ." where (s.uid = ".$uid.")";

        $this->_logger->debug($sql);
        $rc = $this->selectAsRest($sql);
        if (empty($rc)) {
            $rc = array();
            return $rc;
        }
        $valide = array();
        foreach ($rc as $key => $value) {
            if (!array_key_exists($value['uid'], $valide)) {
                $valide[$value['uid']] = $value;
            } else {
                $valide[$value['uid']]['coorganisateur'] .= (",".$value['coorganisateur']);
                $valide[$value['uid']]['coresponsable'] .= (",".$value['coresponsable']);
            }
        }
        $retour = array();
        foreach ($valide as $value) {
            array_push($retour, $value);
        }
        return $retour;
    }

    public function SetDescriptionUneSortie($uid, $desc) {
        if ($this->isSortieExiste($uid) !== false) {
            $uidDescription = $this->isUneDescriptionExisteEtNonPartagee($uid);
            if ($uidDescription === false) {
                $sql = "INSERT INTO `".self::_DBNameDescriptifSortie."` (`sortieAsText`) VALUES ('".$desc."')";
                $rcInsert = $this->insertAsRest($sql);
                $this->_logger->debugTab('Retour de insert: ', $rcInsert);
                
                $sql = "UPDATE ".self::_DBNameLienSortieDescription." SET uiddescriptif=".$rcInsert.", lienpartage = false where (uidsortie = ".$uid.")";
                $this->insertAsRest($sql);
            } else {
                $sql = "UPDATE `".self::_DBNameDescriptifSortie."` SET `sortieAsText`='".$desc."' WHERE (uid = ".$uidDescription.")";
                $this->updateAsRest($sql);
            }
        }
        return true;
    }

    private function isSortieExiste($uid) {
        $sql = "select uid from ".self::_DBNameSortie." where (uid = ".$uid.")";
        $rc = $this->selectAsRest($sql);
        if (empty($rc))
            return false;
        return $rc[0]['uid'];
    }

    private function isUneDescriptionExisteEtNonPartagee($uid) {
        $sql = "select sd.uid from ".self::_DBNameDescriptifSortie." as sd "
               ."inner join ".self::_DBNameLienSortieDescription." sld on (sld.uidsortie = ".$uid.") "
               ."where ((sd.uid = sld.uiddescriptif) and (sld.lienpartage = false))";
        $this->_logger->debug($sql);
        $rc = $this->selectAsRest($sql);
        if (empty($rc))
            return false;
        return $rc[0]['uid'];
    }

    /*
      private function setInfoUneSortie($uid, $info) {
      // infos : [[uid : [1]][nom : [Mandelieu]][datedebut : [2018-04-19]][datefin : [2018-04-26]][resp : [Mace]][sortieAsText : [azerty22]][infoId : [1]]]
      $this->_logger->debugTab("DBSortie input INFO", $info);

      if (isset($info['sortieAsText']) && isset($info['infoId'])) {
      $texte = str_replace("'", "&#39;", $info['sortieAsText']);
      $sql = "update ".self::_DBNameDescriptifSortie." set sortieAsText = '".$texte."' where (uid = ".$info['infoId'].")";
      $this->_logger->debugTab("DBSortie::setInfoUneSortie --------- SQL1: ", $sql);
      $rc = $this->updateAsRest($sql);
      } else if (isset($info['sortieAsText'])) {
      $texte = str_replace("'", "&#39;", $info['sortieAsText']);
      $sql = "insert into ".self::_DBNameDescriptifSortie." (sortieAsText, uidsortie) values ('".$texte."', ".$info['uid'].")";
      $this->_logger->debugTab("DBSortie::setInfoUneSortie --------- SQL1: ", $sql);
      $rc = $this->updateAsRest($sql);
      }

      $sql = 'update ".self::_DBNameDescriptifSortie." set ';
      if (isset($info['nom'])) {
      $sql .= "nom = '".$info['nom']."' ,";
      }
      if (isset($info['datedebut'])) {
      $sql .= "datedebut = '".$info['datedebut']."' ,";
      }
      if (isset($info['datefin'])) {
      $sql .= "datefin = '".$info['datefin']."' ,";
      }
      if (isset($info['organisateur'])) {
      $sql .= "organisateur = ".$info['organisateur']." ,";
      }
      $sql .= 'uid = ' . $info['uid'] . ' where (uid = ' . $info['uid'] . ')';
      $this->_logger->debug("DBSortie::setInfoUneSortie--------- SQL2: " + $sql);
      $rc = $this->updateAsRest($sql);

      return $this->getInfoUneSortie($uid);
      }
     */

    public function SetParticipantUneSortie($uidsortie, $infos) {
        $this->_logger->debugTab("DBSortie::SetParticipantUneSortie--------- uidsortie: ", $uidsortie);
        $this->_logger->debugTab("DBSortie::SetParticipantUneSortie--------- infos: ", $infos);

        $isLiee = (isset($infos['userslies']) && (count($infos['userslies']) > 0));
        $this->SetOneParticipantUneSortie($uidsortie, $infos['userid'], $isLiee, $infos['userid']);
        if ($isLiee) {
            foreach ($infos['userslies'] as $value) {
                $this->SetOneParticipantUneSortie($uidsortie, $value[0], $isLiee, $infos['userid']);
            }
        }
        return $this->GetParticipantUneSortie($uidsortie);
    }

    public function SetParticipantUneSortieNew($uidUsers, $uidSortie, $liee, $UIDLien) {
        foreach ($uidUsers as $value) {
            $this->SetOneParticipantUneSortie($uidSortie, $value, $liee, $UIDLien);
        }
        return TRUE;
    }

    private function SetOneParticipantUneSortie($uidsortie, $uidParticipant, $isliee, $masterParticipant) {
        if ($isliee) {
            $isliee = 'TRUE';
        } else {
            $isliee = 'FALSE';
        }

        // ---------------------------------------------
        // est il deja inscrit?
        // ---------------------------------------------
        $sql = "select uid from sorties_participants where ((uidsortie = ".$uidsortie.") and (uiduser = ".$uidParticipant."))";
        $this->_logger->debugTab("DBSortie::SetOneParticipantUneSortie --------- SQL1: ", $sql);
        $rc = $this->selectAsRest($sql);
        if (empty($rc)) {
            // --------------------------------------------------
            // ok pas deja inscrit
            // --------------------------------------------------
            $sql = "insert into sorties_participants (dateinscription, uidsortie, uiduser, isliee, lieemaster) ";
            $sql .= " values ";
            $sql .= "('".date('Y-m-d H:i:s')."', ".$uidsortie.", ".$uidParticipant.", ".$isliee.", '".$masterParticipant."')";
            $this->_logger->debugTab("DBSortie::SetParticipantUneSortie --------- SQL1: ", $sql);
            $this->insertAsRest($sql);
        } else {
            // cas particulier ou on change de PAS LIE a LIE - sert a la gestion des desInscriptions
            /* if ($isliee) {
              $uid = $rc[0]['uid'];
              $sql = "update sorties_participants set isliee = 1 where (uid = ".$uid.") ";
              $this->_logger->debugTab("DBSortie::SetParticipantUneSortie --------- SQL3: ", $sql);
              $this->updateAsRest($sql);
              } */
        }
        return TRUE;
    }

    public function GetParticipantUneSortieForTable($uidsortie) {
        $sql = "select sp.dateinscription, sp.uidsortie as NumSortie, sp.uiduser, sp.isliee as liee, sp.lieemaster as master, "
               ."s.nom as NomSortie,  "
               ."u.nom as nom, u.prenom as prenom, u.alias as alias "
               ."from sorties_participants sp "
               ."inner join ".self::_DBNameSortie." as s on (s.uid = sp.uidsortie) "
               ."inner join ".self::_DBNameUsers." as u on (u.uid = sp.uiduser) "
               ."where (uidsortie = ".$uidsortie.")";
        $this->_logger->debugTab("DBSortie::GetParticipantUneSortie --------- SQL1: ", $sql);
        $rc = $this->selectAsRest($sql);
        if (empty($rc)) {
            $rc = array();
            return $rc;
        }
        return $rc;
    }

    public function GetParticipantUneSortie($uidsortie) {
        $sql = "select * from sorties_participants where (uidsortie = ".$uidsortie.")";
        $this->_logger->debugTab("DBSortie::GetParticipantUneSortie --------- SQL1: ", $sql);
        $rc = $this->selectAsRest($sql);
        if (empty($rc)) {
            $rc = array();
            return $rc;
        }
        return $rc;
    }

    public function removeParticipant($uiduser, $uidsortie) {
        $this->_logger->debug("DBSortie::removeParticipant --------- removeParticipant: ", $uiduser);
        $user = new DBTableUser();
        $retour = array();
        $idInscriptionAVirer = array();
        $userIdInscriptionAVirer = array();

        $sql = "select uid, isliee, lieemaster from sorties_participants where ((uiduser = ".$uiduser.") && (uidsortie = ".$uidsortie."))";
        $this->_logger->debug("DBSortie::removeParticipant SQL1: ".$sql);
        $infoResaPrincipale = $this->selectAsRest($sql);

        if (!empty($infoResaPrincipale)) {
            array_push($idInscriptionAVirer, $infoResaPrincipale[0]['uid']);
            array_push($userIdInscriptionAVirer, $uiduser);

            // ---------------------------------------------------
            // Si c'est une resa liee, je dois trouve tous les liens
            // ---------------------------------------------------
            if ($infoResaPrincipale[0]['isliee'] == 1) {
                $lienResaLiee = $infoResaPrincipale[0]['lieemaster'];
                $sql = "select uid, uiduser from sorties_participants where ((lieemaster = '".$lienResaLiee."') && (uidsortie = ".$uidsortie."))";
                $this->_logger->debug("DBSortie::removeParticipant SQL2: ".$sql);
                $infoSecondaire = $this->selectAsRest($sql);

                foreach ($infoSecondaire as $uneInscription) {
                    array_push($idInscriptionAVirer, $uneInscription['uid']);
                    array_push($userIdInscriptionAVirer, $uneInscription['uiduser']);
                }
            }
        }

        $this->_logger->debugTab("DBSortie::removeParticipant --------- idInscriptionAVirer: ", $idInscriptionAVirer);
        $this->_logger->debugTab("DBSortie::removeParticipant --------- userIdInscriptionAVirer: ", $userIdInscriptionAVirer);

        for ($i = 0; $i < count($idInscriptionAVirer); $i++) {
            $sql = "delete from sorties_participants where (uid = ".$idInscriptionAVirer[$i].")";
            $this->_logger->debugTab("DBSortie::removeParticipant --------- SQL delete: ", $sql);
            $rc = $this->deleteAsRest($sql);
            if ($rc == TRUE) {
                array_push($retour, $user->getUserPublicInfo($userIdInscriptionAVirer[$i]));
            }
        }
        $this->_logger->debugTab("DBSortie::removeParticipant --------- retour: ", $retour);
        return $retour;
    }

    public function addSortie($nomSortie, $uidOrga, $datedeb, $datefin, $uidOptionels) {
        $sql = "select uid from ".self::_DBNameSortie." where ((nom = '".$nomSortie."') and (datedebut = '".$datedeb."') and (datefin = '".$datefin."'))";
        $this->_logger->debugTab("DBSortie::SetOneParticipantUneSortie --------- SQL1: ", $sql);
        $rc = $this->selectAsRest($sql);
        if (empty($rc)) {
            // --------------------------------------------------
            // ok pas deja inscrit
            // --------------------------------------------------
            $sql = "insert into ".self::_DBNameSortie." (nom, datedebut, datefin, datecreation, organisateur) ";
            $sql .= " values ";
            $sql .= "('".$nomSortie."', '".$datedeb."', '".$datefin."', '".date('Y-m-d H:i:s')."', ".$uidOrga.")";
            $this->_logger->debugTab("DBSortie::SetParticipantUneSortie --------- SQL1: ", $sql);
            $rc = $this->insertAsRest($sql);
            if ($rc !== FALSE) {
                $sortieUID = $rc;
                $this->addOrganisateurSecondaire($uidOptionels, $sortieUID);

                $sql = "insert into ".self::_DBNameLienSortieDescription." (uiddescriptif, uidsortie, lienpartage) values (1, ".$sortieUID.", true)";
                $rc = $this->updateAsRest($sql);
            }
        }
        return true;
    }

    private function addOrganisateurSecondaire($uidUsers, $uidsortie) {
        $this->_logger->debug("DBSortie::addOrganisateurSecondaire--------- uidsortie: >>".$uidsortie."<<<");
        $this->_logger->debugTab("DBSortie::addOrganisateurSecondaire--------- infos: >>", $uidUsers);
        $this->_logger->debug("DBSortie::addOrganisateurSecondaire--------- is_array: ".is_array($uidUsers));
        $this->_logger->debug("DBSortie::addOrganisateurSecondaire--------- TAILLE: ".count($uidUsers));

        foreach ($uidUsers as $value) {
            // lien existe deja ?
            $sql = "select uid from ".self::_DBNameSortieOrganisateurSecondaire." where ((uidsortie = ".$uidsortie.") and (uiduser = ".$value."))";
            $this->_logger->debugTab("DBSortie::addOrganisateurSecondaire --------- SQL1: ", $sql);
            $rc = $this->selectAsRest($sql);
            if (empty($rc)) {
                // --------------------------------------------------
                // ok pas deja inscrit
                // --------------------------------------------------
                $sql = "insert into ".self::_DBNameSortieOrganisateurSecondaire." (dateinscription, uidsortie, uiduser) ";
                $sql .= " values ";
                $sql .= "('".date('Y-m-d H:i:s')."', ".$uidsortie.", ".$value.")";
                $this->_logger->debugTab("DBSortie::addOrganisateurSecondaire --------- SQL2: ", $sql);
                $this->insertAsRest($sql);
            }
        }
        return true;
    }

}
