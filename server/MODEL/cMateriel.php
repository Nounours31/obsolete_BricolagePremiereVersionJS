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
include_once $_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/DB/DBMateriel.php';

class cMateriel {
    public function __construct() {
    }
    
    public function __destruct() {
    }

    static function getProprietesEtValues() {
        $s = new DBMateriel();
        return $s->getProprietesEtValues();
    }    

    static function addType($type, $desc) {
        $s = new DBMateriel();
        return $s->addType($type, $desc);
    }    
    static function addPropriete($type, $desc) {
        $s = new DBMateriel();
        return $s->addPropriete($type, $desc);
    }    

    static function getAllTypes() {
        $s = new DBMateriel();
        return $s->getAllTypes();
    }    

    static function getAllProprietes($type, $versionCourte) {
        $s = new DBMateriel();
        return $s->getAllProprietes($type, $versionCourte);
    }   
    
    static function addProprieteValeur($prop, $val) {
        $s = new DBMateriel();
        return $s->addProprieteValeur($prop, $val);
    }   
    
    
    static function linkTypePropriete ($type, $prop) {
        $s = new DBMateriel();
        return $s->linkTypePropriete ($type, $prop);
    }   

    static function getProprietesDeUnType($type) {
        $s = new DBMateriel();
        return $s->getProprietesDeUnType($type);
    }   
    
    static function createMateriel ($nomMateriel, $uidSectionDuMateriel, $typeDuMateriel, $aProps) {
        $s = new DBMateriel();
        return $s->createMateriel($nomMateriel, $uidSectionDuMateriel, $typeDuMateriel, $aProps);        
    }
    
    static function getMaterielDisponible ($filtrage) {
        $loger = new Traces('cMateriel::getMaterielDisponible');
        $s = new DBMateriel();
        
        // parse des proprietes
        // [04/08/2018-23:56:17 # inconnu] JSONTools.php -- POST content: -->[{"propriete":"Type de Materiel","estceunepropriete":"false","valeurs":["detendeur"]},{"propriete":"sorties","estceunepropriete":"true","valeurs":["mer"]},{"propriete":"taille","estceunepropriete":"true","valeurs":["-"]},{"propriete":"taillebloc","estceunepropriete":"true","valeurs":["-"]},{"propriete":"typedetendeur","estceunepropriete":"true","valeurs":["-"]}]<--
        // [04/08/2018-23:56:17 # inconnu] JSONTools.php -- POST decoded  [0 : [[propriete : {Type de Materiel}][estceunepropriete : {false}][valeurs : [[0 : {detendeur}]]]]][1 : [[propriete : {sorties}][estceunepropriete : {true}][valeurs : [[0 : {mer}]]]]][2 : [[propriete : {taille}][estceunepropriete : {true}][valeurs : [[0 : {-}]]]]][3 : [[propriete : {taillebloc}][estceunepropriete : {true}][valeurs : [[0 : {-}]]]]][4 : [[propriete : {typedetendeur}][estceunepropriete : {true}][valeurs : [[0 : {-}]]]]]        $arrayTypeValeurs = array();
        $arrayTypeValeurs = array();
        foreach ($filtrage as $unepropriete) {
            // je ne garde que le properties ici
            if (($unepropriete['estceunepropriete'] == false) || ($unepropriete['estceunepropriete'] == 'false')) continue;
            // a t elle des valeur
            $aUneValeur = false;
            foreach ($unepropriete['valeurs'] as $value) {
                if ($value != '-') {
                    $aUneValeur = true;
                }
            }
            if (!$aUneValeur) continue;
            
            
            $arrayTypeValeurs[$unepropriete['propriete']] = $unepropriete['valeurs'];
        }
        
        // filtarge sur le type (pas une propriete
        $type = '';
        foreach ($filtrage as $unepropriete) {
            // je ne garde que le properties ici
            if (($unepropriete['estceunepropriete'] == false) || ($unepropriete['estceunepropriete'] == 'false')) {
                $loger ->debugTab('unepropriete =', $unepropriete);
                if (($unepropriete['propriete'] == 'Type de Materiel') && ($unepropriete['valeurs'][0] != '-')) {
                    $type = $unepropriete['valeurs'][0];
                }
            }
        }
        $loger ->debug('type='.$type);
        $materielFiltreSurLesPropriete = $s -> listDeMaterielVerifiantUneListeDePropertieEtValue ($arrayTypeValeurs, $type);
        return $materielFiltreSurLesPropriete;
    }
    
    static function getDisponibiliteMaterielWithDateAsHTML ($uidMateriel, $debut, $fin) {
        $s = new DBMateriel();
        $aResas = $s->getResaDuMateriel($uidMateriel, $debut, $fin);
        $start = strtotime($debut); //date_create_from_format('j/n/Y', $debut)->format('U');
        $end = strtotime($fin); //date_create_from_format('j/n/Y', $fin)->format('U');
        $current = $start;
        $html = '<tr><td>'.$uidMateriel.'</td>';
        $estCeQueAucuneResaNaEtePoseCeJour = true;
        $loger = new Traces('cMateriel::getMaterielDisponible');
        $loger->debug("Init: start = ".$start."    end = ".$end."     current =".$current);
        // $debug = true;
        while ($current <= $end){
            $estCeQueCeJourADejaEteReserve = false;
            $userQuiAReserve = '';
            foreach ($aResas as $resa) {
                $startResa = strtotime ($resa['debut']);
                $endResa = strtotime ($resa['fin']);
                if (($startResa <= $current) && ($endResa >= $current)) {
                    $estCeQueCeJourADejaEteReserve = true;
                    $userQuiAReserve = $resa['infoResa'];
                    $estCeQueAucuneResaNaEtePoseCeJour = false;
                }
            }
            if ($estCeQueCeJourADejaEteReserve) {
                $html .= '<td class="idCMD3_1RESERVER_ReservationImpossiblePourCeJour">'.$userQuiAReserve.'</td>';
            } 
            else {
                $html .= '<td class="idCMD3_1RESERVER_ReservationPossiblePourCeJour">'.(date("Y-m-d",$current)).'</td>';                
            }
            $current = strtotime(date("Y-m-d",$current)." +1 day");
        }
        if ($estCeQueAucuneResaNaEtePoseCeJour) {
            $html .= '<td><button name="buttonReservationMateriel_'.$uidMateriel.'" id="buttonReservationMateriel_'.$uidMateriel.'">Oui</button></td>';                            
        }
        else {
            $html .= '<td>Reservatiion Impossible</td>';                            
        }
        $html .= '</tr>';
        $loger->debug("HTML: = ".$html);
        $ret = array ();
        $ret ['HTML'] = $html;
        $ret ['rc'] = $estCeQueAucuneResaNaEtePoseCeJour;
        $loger->debugTab("ret: = ",$ret);
        return $ret;
    }
}