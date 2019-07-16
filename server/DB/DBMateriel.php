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
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/API/Tools.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/DB/iDBAccess.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/PHPClasses/DB/DBTableUser.php';

class DBMateriel extends iDBAccess {

    public function __construct() {
        parent::__construct();
        $this->_DBName = self::_DBNameMateriel;
        $this->_logger->prefix('DBMateriel.php');
    }

    public function __destruct() {
        parent::__destruct();
    }
    
    public function getAllMaterielList($uidMateriel = null, $DoisJeLesPacker = false) {
        $sql = "select m.uid, m.uidsection, m.finvaliditerevision, m.nom, m.type, f.propriete as filtre, f.valeur as filtrevaleur from ".self::_DBNameMateriel." m "
                . " left join ".self::_DBNameMateriel_ProprieteDeUnMateriel." f on (m.uid = f.uidmateriel)";
        if ($uidMateriel != null) {
            $sql .= " where (m.uid = ".$uidMateriel.")";
        }
        $rc = $this->selectAsRest($sql);
        if (empty($rc)) {
            $rc = array();
            return $rc;
        }
        
        $tempo = array();
        $ret = array();
        if ($DoisJeLesPacker) {
            foreach ($rc as $value) {
                $matCourant = $value['uid'];
                if (isset ($tempo[$matCourant])) {
                    $tempo[$matCourant]['filtre'] .= "; [".$value['filtre'].":".$value['filtrevaleur']."]" ;
                }
                else {
                    $tempo[$matCourant] = $value;
                    $tempo[$matCourant]['filtre'] = "[".$value['filtre'].":".$value['filtrevaleur']."]" ;
                    unset ($tempo[$matCourant]['filtrevaleur']);
                }
            }
            foreach ($tempo as $value) {
                array_push($ret, $value);
            }
        }
        else {
            $ret = $rc;
        }
        return $ret;
    }
    
    public function updateMateriel ($uid, $args) {
        $sql = "update ".self::_DBNameMateriel." set ";
        $isFirst = true;
        $hasModification = false;
        foreach ($args as $key => $value) {
            if (strcmp ($key,'proprieteToAdd') == 0) continue;
            if (strcmp ($key,'proprieteToRemove') == 0) continue;
            if (!$isFirst) {
                $sql .= ', ';
            }
            $isFirst = false;
            $hasModification = true;
            $sql .= " ".$key." = '".$value."'";
        }
        $sql .= " where (uid = ".$uid.")";
        if ($hasModification) {
            $this ->updateAsRest($sql);
            echo $sql;
        }
        
        if (isset ($args['proprieteToAdd'])) {
            $sql = "INSERT INTO ".self::_DBNameMateriel_ProprieteDeUnMateriel." "
                    . "(uidmateriel, propriete, valeur) VALUES (".$uid.", '".$args['proprieteToAdd']['propriete']."', '".$args['proprieteToAdd']['valeur']."')";
            $this->insertAsRest($sql);
            echo $sql;
        }

        if (isset ($args['proprieteToRemove'])) {
            $sql = "delete from ".self::_DBNameMateriel_ProprieteDeUnMateriel." "
                    . "where ((uidmateriel = ".$uid.") and (propriete = '".$args['proprieteToRemove']['propriete']."') and (valeur = '".$args['proprieteToRemove']['valeur']."'))";
            $this->deleteAsRest($sql);
            echo $sql;
        }
    }
    
    public function getValeursDeUnePropriete($prop) {
        $retour = array();
        $sql = "select apourvaleur from ".self::_DBNameMateriel_ValeursProprietes." ";
        $sql .= "where (propriete = '".$prop."')";
        $rc = $this->selectAsRest($sql);
        if (!empty($rc)) {
            foreach ($rc as $value) {
                $nomValeur = $value['apourvaleur'];
                array_push($retour, $nomValeur);
            }
        }
        return $retour;
    }

    public function getProprietesEtValues() {
        $retour = array();
        $sql = 'select type from '.self::_DBNameMaterielType;
        $rc = $this->selectAsRest($sql);
        if (!empty($rc)) {
            $pipo = array();
            $pipo['nom'] = 'Type de Materiel';
            $pipo['propriete'] = false;
            $pipo['valeurs'] = array();
            foreach ($rc as $value) {
                array_push($pipo['valeurs'], ($value['type']));
            }
            array_push($retour, $pipo);
        }

        $sql = 'select propriete from '.self::_DBNameMaterielPropriete;
        $rc = $this->selectAsRest($sql);
        if (!empty($rc)) {
            foreach ($rc as $value) {
                $nomPropriete = $value['propriete'];
                $pipo = array();
                $pipo['nom'] = $nomPropriete;
                $pipo['propriete'] = true;
                $pipo['valeurs'] = array();

                $sql = 'select apourvaleur from '.self::_DBNameMateriel_ValeursProprietes." where (propriete = '".$nomPropriete."')"; 
                $rcValeur = $this->selectAsRest($sql);
                if (!empty($rcValeur)) {
                    foreach ($rcValeur as $value) {
                        array_push ($pipo['valeurs'], $value['apourvaleur']);
                    }
                }
                array_push($retour, $pipo);
            }
        }
        return $retour;
    }
    

    public function addPropriete($type, $desc) {
        return $this->addMachin($type, $desc, 'propriete');
    }    

    public function addType($type, $desc) {
        return $this->addMachin($type, $desc, 'type');
    }    

    private function addMachin($val, $desc, $type) {
        if (!$this->isMachinExist ($val, $type)) {
            if ($type == 'type') {
                $db = self::_DBNameMaterielType;
                $machin = 'type';
                $description = 'description';
            }
            else if ($type == 'propriete') {
                $db = self::_DBNameMaterielPropriete;
                $machin = 'propriete';
                $description = 'description';
            }

            $sql = "INSERT INTO ".$db." (".$machin.", ".$description.") VALUES ('".$val."','".$desc."')";
            $this ->insertAsRest($sql);
        }
        return true;
    }    
 
    private function isMachinExist($val, $type) {
        if ($type == 'type') {
            $db = self::_DBNameMaterielType;
            $machin = 'type';
        }
        else if ($type == 'propriete') {
            $db = self::_DBNameMaterielPropriete;
            $machin = 'propriete';
        }
        $sql = "select * from ".$db." where ('".$machin."' = '".$val."')";
        $rc = $this ->selectAsRest($sql);
        if (!empty($rc))
            return true;
        return false;
    }    

    public function getAllTypes() {
        return $this ->getAllMachins('type');
    }

    public function getAllMachins($type) {
        $ret = array();
        if ($type == 'type') {
            $db = self::_DBNameMaterielType;
            $machin = 'type';
            $description = 'description';
            $sql = "select ".$machin.", ".$description." from ".$db;
            $rc = $this ->selectAsRest($sql);
            if (!empty($rc)) {
                foreach ($rc as $value) {
                    array_push($ret, $value);
                }
            }
        }
        else if ($type == 'propriete') {
        }
        return $ret;
    }
    
    public function getAllProprietes($type, $versionCourte) {
        $ret = array();
        $sql = "select prop.propriete as propriete , prop.description as description, valeurprop.apourvaleur as valeur from ".self::_DBNameMaterielPropriete." as prop"; 
        $sql .= " left join ".self::_DBNameMateriel_ValeursProprietes." valeurprop on (valeurprop.propriete = prop.propriete)";
        if ($type != null) {
            $sql .= " where (prop.propriete = '".$type."')";
        }
        $this -> _logger -> debug("SQL ---".$sql);
        $valide = array();
        $retNONCONCATENE = array();
        $rc = $this ->selectAsRest($sql);
        if (!empty($rc)) {
            foreach ($rc as $value) {
                if (!array_key_exists($value['propriete'], $valide)) {
                    $valide[$value['propriete']] = $value;
                    array_push ($retNONCONCATENE, $value['valeur']);
                }
                else {
                    $valide[$value['propriete']]['valeur'] .= ('; '.$value['valeur']);                        
                    array_push ($retNONCONCATENE, $value['valeur']);
                }
            }
            foreach ($valide as $value) {
                array_push($ret, $value);
            }
        }
        if ($versionCourte && (count($ret) == 1)){
            $ret = $retNONCONCATENE;
        }
        return $ret;
    }

    private function isProprieteValeurExiste ($prop, $val) {
        $sql = "select uid from ".self::_DBNameMateriel_ValeursProprietes." where ((propriete = '".$prop."') and (apourvaleur = '".$val."'))";
        $this -> _logger -> debug("SQL ---".$sql);
        $rc = $this ->selectAsRest($sql);
        if (!empty($rc)) {
            return true;
        }
        return false;
    }
    public function addProprieteValeur($prop, $val) {
        $vals = explode (";", $val);
        $insertVal = array();
        foreach ($vals as $value) {
            if (!$this->isProprieteValeurExiste($prop, $value)) {
                array_push($insertVal, $value);
            }
        }
        if (count($insertVal) > 0) {
            $sql = "INSERT INTO ".self::_DBNameMateriel_ValeursProprietes." (propriete, apourvaleur) VALUES ";
            $isfirst = true;
            foreach ($insertVal as $value) {
                if (!$isfirst) {
                    $sql .= ',';
                }
                $sql .= "('".$prop."','".$value."')";
                $isfirst = false;
            }
            $this -> _logger -> debug("SQL ---".$sql);
            $rc = $this ->insertAsRest($sql);
        }
        return true;
    }
    
    public function linkTypePropriete ($type, $prop) {
        $sql = "select uid from ".self::_DBNameMateriel_ProprietePoseeSurUnType." where ((type = '".$type."') and (apourpropriete = '".$prop."'))";
        $this -> _logger -> debug("SQL ---".$sql);
        $rc = $this ->selectAsRest($sql);
        if (!empty($rc)) {
            return true;
        }
        $sql = "insert into ".self::_DBNameMateriel_ProprietePoseeSurUnType." (type, apourpropriete) values ('".$type."', '".$prop."')";
        $this -> _logger -> debug("SQL ---".$sql);
        $rc = $this ->insertAsRest($sql);
        return true;
    }
    
    public function getProprietesDeUnType($type) {
        $ret = array();
        $sql = "select apourpropriete from ".self::_DBNameMateriel_ProprietePoseeSurUnType." where (type = '".$type."')";
        $this -> _logger -> debug("SQL ---".$sql);
        $rc = $this ->selectAsRest($sql);
        if (empty($rc)) {
            return $ret;
        }
        foreach ($rc as $value) {
            array_push($ret, $value['apourpropriete']);
        }
        return $ret;        
    }
    
    
    
    
    public function setPropertieValueToMateriel ($uidmat, $prop, $val) {
        $ret = array();
        $sql = "select uid from ".self::_DBNameMateriel_MaterielEtSesProprietes." where ((uidmateriel = ".$uidmat.") and (propriete = '".$prop."'))";
        $this -> _logger -> debug("SQL ---".$sql);
        $rc = $this ->selectAsRest($sql);
        if (empty($rc)) {
            $sql = "insert into ".self::_DBNameMateriel_MaterielEtSesProprietes." (uidmateriel, propriete, valeur) values (".$uidmat.", '".$prop."', '".$val."')";
            $this ->insertAsRest($sql);
        }
        else {
            $sql = "update ".self::_DBNameMateriel_MaterielEtSesProprietes." set valeur = '".$val."' where (uid = ".$rc[0]['uid'].")";
            $this ->updateAsRest($sql);
        }
        return $true;        
    }
    
    public function listPourUnMaterielDeSesPropertieEtValue ($uidmat) {
        $ret = array();
        $sql = "select propriete, valeur from ".self::_DBNameMateriel_MaterielEtSesProprietes." where (uidmateriel = ".$uidmat."))";
        $this -> _logger -> debug("SQL ---".$sql);
        $rc = $this ->selectAsRest($sql);
        if (empty($rc)) {
            return ret;
        }
        else {
            $valide = array();
            foreach ($rc as $value) {
                if (!array_key_exists($value['propriete'], $valide)) {
                    $valide[$value['propriete']] = $value;
                }
                else {
                    $valide[$value['propriete']]['valeur'] .= ('; '.$value['valeur']);                        
                }
            }
            foreach ($valide as $value) {
                array_push($ret, $value);
            }
        }
        return $ret;        
    }

    private function _incrementeTableNameIndex(&$indexNomCourant, &$indexNomPrecedent) {
        $indexNomCourant ++;
        if ($indexNomCourant > 1) {
            $indexNomCourant = 0;
        }
        $indexNomPrecedent ++;
        if ($indexNomPrecedent > 1) {
            $indexNomPrecedent = 0;
        }
    }
    
    public function listDeMaterielVerifiantUneListeDePropertieEtValue ($arrayTypeValeurs, $type) {
        $this -> _logger -> debug("START listDeMaterielVerifiantUneListeDePropertieEtValue ");

        $infosPartiellesMateriel    = array();
        $allInfos                   = array();
        
        $link =  $this ->connect();
        
        $nomTemporaryTable = array ("RESULTAT_INTERMEDIAIRE_1", "RESULTAT_INTERMEDIAIRE_2"); 
        $indexNomCourant = 0;
        $indexNomPrecedent = 1;
        $sql = "create temporary table ".$nomTemporaryTable[$indexNomCourant]." ENGINE=MEMORY as select distinct mat.uid from ".self::_DBNameMateriel." as mat";        
        if (strlen ($type) > 0) {
            $sql .= " where (mat.type = '".$type."')";
        }                
        $rc = $this ->select($link , $sql);
        $rc = $this ->select($link , 'select * from '.$nomTemporaryTable[$indexNomCourant]);
        $this -> _logger -> debug("SQL into variable :: ".$sql);
        $this -> _logger-> debugTab ("Resultat :: ",$rc);
        if (count($rc) < 1) {
            $allInfos ['liste_proprietes'] = array();
            $allInfos ['filtrage'] = array();
            $this ->close($link);
            return $allInfos;
        }
        
        
        foreach ($arrayTypeValeurs as $key => $aListValeur) {
            $this->_incrementeTableNameIndex($indexNomCourant, $indexNomPrecedent);
            $subSql = "create temporary table ".$nomTemporaryTable[$indexNomCourant]." ENGINE=MEMORY ENGINE=MEMORY as select mat.uid from ".self::_DBNameMateriel." as mat "
                    . "inner join materiels_proprietes_valuees_dun_materiel propmat on (propmat.uidmateriel = mat.uid) "
                    . "where ((mat.uid in (select * from ".$nomTemporaryTable[$indexNomPrecedent].")) and ";

            $propriete = $key;            
            $localSqlWhere = "((propmat.propriete = '".$propriete."') and (";
            $isWhereAEteModifiee = true;
            $premiereValeur = true;
            foreach ($aListValeur as $uneValeur) {
                if (! $premiereValeur) {
                    $localSqlWhere .= ' or ';
                }
                $localSqlWhere .= "(propmat.valeur = '".$uneValeur."')";
            }
            $localSqlWhere .= "))";
            $subSql .= $localSqlWhere . ")";            
            $rc = $this ->select($link, $subSql);
            $rc = $this ->select($link , 'select * from '.$nomTemporaryTable[$indexNomCourant]);

            $subSql = "drop temporary table ".$nomTemporaryTable[$indexNomPrecedent];            
            $pipo = $this ->select($link, $subSql);

            $this -> _logger -> debug("SQL into variable :: ".$subSql);
            $this -> _logger-> debugTab ("Resultat :: ",$rc);
            if (count($rc) < 1) {
                $allInfos ['liste_proprietes'] = array();
                $allInfos ['filtrage'] = array();
                $this ->close($link);
                return $allInfos;
            }            
        }
        $sql = "select distinct mat.uid, mat.uidsection, mat.nom, mat.type from ".self::_DBNameMateriel." as mat where (mat.uid in (select * from ".$nomTemporaryTable[$indexNomCourant]."))";
        $infosPartiellesMateriel = $this ->select($link, $sql);
        $this -> _logger -> debug("SQL into variable :: ".$sql);
        $this -> _logger-> debugTab ("Resultat :: ", $infosPartiellesMateriel);
        $this ->close($link);

        
        

        
        // ----------------------------------------------
        // Pour chacun de ces materiel toutes les infos liees
        // $infosPartiellesMateriel contient: [0](mat.uid, mat.uid, mat.uidsection, mat.nom, mat.type)
        // 
        // POur simplifie l'affichage kje contruit la liste de toutes les propriete qui sont value pour ces materiels
        // la liste s'appelle aListePropToDisplay
        // ----------------------------------------------
        $aListePropToDisplay = array();
        for($i = 0;  $i < count ($infosPartiellesMateriel); $i++) {
            $unMateriel = $infosPartiellesMateriel[$i];
            $allInfoUnMateriel = array();
            $uidMateriel = $unMateriel['uid'];
            $sql = "select propriete, valeur from ".self::_DBNameMateriel_ProprieteDeUnMateriel." where (uidmateriel = ".$uidMateriel.")";
            $proprieteInfos = $this ->selectAsRest($sql);
            foreach ($proprieteInfos as $unePropriete) {
                if (!in_array($unePropriete['propriete'], $aListePropToDisplay)) {
                    array_push($aListePropToDisplay, $unePropriete['propriete']);
                }
            }
            $infosPartiellesMateriel[$i]['proprietes'] = $proprieteInfos;
        }
        
        $allInfos ['liste_proprietes'] = $aListePropToDisplay;
        $allInfos ['filtrage'] = $infosPartiellesMateriel;
        $this -> _logger -> debug("SQL >>> ".Tools::arrayToString($infosPartiellesMateriel));
        return $allInfos;
    }
    
    public function createMateriel ($nomMateriel, $uidSectionDuMateriel, $typeDuMateriel, $aProps) {
        return $this -> _createMateriel ($nomMateriel, $uidSectionDuMateriel, $typeDuMateriel, $aProps, true);
    }
    
    private function _createMateriel ($nomMateriel, $uidSectionDuMateriel, $typeDuMateriel, $aProps, $withlog) {
        $log = array();
        // ------------------------------------------------------
        // ajout du materiel si besoin
        // ------------------------------------------------------
        $sql = "select uid from ".self::_DBNameMateriel." where "
                ."((uidsection = ".$uidSectionDuMateriel.") and (nom = '".$nomMateriel."') and (type = '".$typeDuMateriel."'))";            
        $this -> _logger -> debug("SQL ---".$sql);
        $rc = $this ->selectAsRest($sql);
        $uidMateriel = 0;
        if (empty ($rc)) {
            $sql = "insert into ".self::_DBNameMateriel." (uidsection, nom, type, finvaliditerevision) values (".$uidSectionDuMateriel.", '".$nomMateriel."', '".$typeDuMateriel."', '".date('Y-m-d', strtotime('+1 year'))."')";
            $uidMateriel = $this ->insertAsRest($sql);
            if ($withlog) {
                $log [$uidMateriel] = array();
                $log [$uidMateriel]['Status'] = 'Creation';
                $log [$uidMateriel]['uidsection'] = $uidSectionDuMateriel;
                $log [$uidMateriel]['nom'] = $nomMateriel;
                $log [$uidMateriel]['type'] = $typeDuMateriel;
                $log [$uidMateriel]['uid'] = $uidMateriel;
            }
        }
        else {
            $uidMateriel = $rc [0]["uid"];
            if ($withlog) {
                $log [$uidMateriel] = array();
                $log [$uidMateriel]['Status'] = 'EXISTE DEJA';
                $log [$uidMateriel]['uidsection'] = $uidSectionDuMateriel;
                $log [$uidMateriel]['nom'] = $nomMateriel;
                $log [$uidMateriel]['type'] = $typeDuMateriel;
                $log [$uidMateriel]['uid'] = $uidMateriel;
            }
        }

        // ------------------------------------------------------
        // ajout/modif de la propriete
        // ------------------------------------------------------
        // print (" -- aProps -------------------");
        // print_r ($aProps);
        foreach ($aProps as $nomPropriete => $aProprieteValeur) {
            // print (" -- aProprieteValeur  ----------- ");
            // print_r ($aProprieteValeur);

            foreach ($aProprieteValeur as $uneValeurDeCettePropriete) {
                $sql = "select uid, valeur from ".self::_DBNameMateriel_ProprieteDeUnMateriel." where "
                        . "((uidmateriel = ".$uidMateriel.") and (propriete = '".$nomPropriete."'))";
                $this -> _logger -> debug("SQL ---".$sql);
                $rc = $this -> selectAsRest($sql);
                
                // ------------------------------------------------------
                // la propriete existe mais est elle encore vraie? 
                // je prefere la detruire que de la multivaluee
                // ------------------------------------------------------
                if (!empty ($rc)) {
                    $deletevalueForLog = '';
                    $sql = "delete from ".self::_DBNameMateriel_ProprieteDeUnMateriel." where uid in (";
                    $isFirst = true;
                    foreach ($rc as $value) {
                        if (!$isFirst) 
                            $sql .= ',';
                        $sql .= $value['uid'];
                        $isFirst = false;
                        if ($withlog) {
                            $deletevalueForLog .= "valeur:".$value['valeur']." / uid:".$value['uid'];
                        }
                    }
                    $sql .= ')';
                    $this ->deleteAsRest($sql);
                    if ($withlog) {
                        if (!isset($log [$uidMateriel]['proprietes-clean']))  
                            $log [$uidMateriel]['proprietes-clean'] = array();
                        if (!isset($log [$uidMateriel]['proprietes-clean'][$nomPropriete]))  
                            $log [$uidMateriel]['proprietes-clean'][$nomPropriete] = array();
                        $log [$uidMateriel]['proprietes-clean'][$nomPropriete]['status'] = 'DELETE';
                        $log [$uidMateriel]['proprietes-clean'][$nomPropriete]['valeur'] = $deletevalueForLog;
                    }
                }
            }    
            // ---------------------------------------------------------
            // menage fait on peu inserer
            // ---------------------------------------------------------
            $sql = "insert into ".self::_DBNameMateriel_ProprieteDeUnMateriel." (uidmateriel, propriete, valeur) values ";
            $isFirst = true;
            foreach ($aProprieteValeur as $uneValeurDeCettePropriete) {
                if (!$isFirst) 
                    $sql .= ',';
                $sql .= "(".$uidMateriel.", '".$nomPropriete."', '".$uneValeurDeCettePropriete."')";
                $isFirst = false;
            }
            $this -> insertAsRest($sql);
            if ($withlog) {
                if (!isset($log [$uidMateriel]['proprietes-create']))  
                    $log [$uidMateriel]['proprietes-create'] = array();
                if (!isset($log [$uidMateriel]['proprietes-create'][$nomPropriete]))  
                    $log [$uidMateriel]['proprietes-create'][$nomPropriete] = array();
                $log [$uidMateriel]['proprietes-create'][$nomPropriete]['status'] = 'CREATION';
                $log [$uidMateriel]['proprietes-create'][$nomPropriete]['valeur'] = $aProprieteValeur;
            }
        }
        return $log;
    }
    
    public function getResaDuMateriel($uidMateriel, $debut, $fin) {
        $sql = 'select resa.uid, resa.debut, resa.fin, resa.uiduser, resa.uidmateriel, users.nom, users.prenom, CONCAT("[",users.prenom," ",users.nom,"]") as infoResa from '.self::_DBNameMaterielReservation." as resa "
                ." inner join ".self::_DBNameUsers." users on (users.uid = resa.uiduser)"
                ." where (uidmateriel = ".$uidMateriel.")";
        return $this ->selectAsRest($sql);
    }
}
