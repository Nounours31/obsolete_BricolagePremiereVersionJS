<?php
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
ini_set('display_errors', 'on');


/**
 * Description of ENVT
 *
 * @author PFS
 */
class BRIConst {

    // Debug Info
    const _ALL = 1;
    const _DEBUG = 10;
    const _INFO = 50;
    const _ERROR = 75;
    const _FATAL = 99;
    
    // Contenu des message de sortie
    const _MSG_TYPE_UNDEF = 'undef';
    const _MSG_TYPE_ERROR = 'error';
    const _MSG_TYPE_ERRORNO = 'error_no';
    const _MSG_TYPE_MESSAGE = 'data';
    const _MSG_TYPE_ERRORDATA = BRIConst::_MSG_TYPE_MESSAGE;

    // Contenu des message de entree
    const MSG_IN_REQUETE = "requete";
    const MSG_IN_SERVICE_AVAILABLE_USERINITPWD = 'init_passwd';
    const MSG_IN_SERVICE_AVAILABLE_USERLOGGING = 'logging';
    // const MSG_IN_SERVICE_AVAILABLE = ['User', 'resa'];
    
    const MSG_IN_TYPE = "type";
    const MSG_IN_TYPE_AVAILABLE_USER = 'user';
    const MSG_IN_TYPE_AVAILABLE_RESA = 'resa';
    // const MSG_IN_TYPE_AVAILABLE = [BRIConst::MSG_IN_TYPE_AVAILABLE_USER, BRIConst::MSG_IN_TYPE_AVAILABLE_RESA]; // pas possible en PHP
    const MSG_IN_ARGS = "args";
    const NOM_ARGUMENT = "name";
    const VALEUR_ARGUMENT = "value";

    
    // DB Cnx
    
    // Cookie de cnx
    const COOKIE_LOGGING = "COOKIE_LOGGING";
    const COOKIE_CSRF = "COOKIE_CSRF";
    
}
