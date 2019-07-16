<?php
include_once($_SERVER['DOCUMENT_ROOT'].'NewPlouf/Dev/php/PHPClasses/API/Traces.php');

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DBAdapteur
 *
 * @author PFS
 */
abstract class iDB {
    protected $_DBName = '';
    protected $_logger = null;
    
    const _DBNameMateriel = 'materiels';
    const _DBNameMaterielReservation = 'materiels_reservation';
    const _DBNameMaterielType = 'materiels_types';
    const _DBNameMaterielPropriete = 'materiels_proprietes';
    const _DBNameMaterielFiltres = 'materiels_listedesfiltresconnus';
    const _DBNameMateriel_ValeursProprietes = 'materiels_valeurs_des_proprietes';
    const _DBNameMateriel_ProprietePoseeSurUnType = 'materiels_proprietes_dun_type';
    const _DBNameMateriel_ProprieteDeUnMateriel = 'materiels_proprietes_valuees_dun_materiel';
    
    const _DBNameRole = 'roles';
    const _DBNameNotif = 'notifications';
    
    const _DBNameSortie = 'sorties';
    const _DBNameDescriptifSortie = 'sorties_descriptifs';
    const _DBNameLienSortieDescription = 'sorties_lien_descriptifs';
    const _DBNameSortieOrganisateurSecondaire = 'sorties_orga_second';
    const _DBNameSortieParticipant = 'sorties_participants';
    
    const _DBNameUsers = 'users';
    const _DBNameUserPassword = 'users_pwdmngt';
    const _DBNameUserRole = 'users_role';
    const _DBNameUserNotifs = 'users_notifications';
    const _DBUserCACI = 'users_caci';

    public function __construct() {
        $this->_logger = new Traces ('DBAdaptateur');
    }
    public function __destruct() {
    }
}
