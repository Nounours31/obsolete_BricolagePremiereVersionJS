'use strict';

export class BRIConst {
     constructor() {
     }

     // Niveau de dev
     static get DEV() { return 0; }
     static get PREPROD() { return 1; }
     static get PROD() { return 2; }

     // Erreur
     static get S_OK() { return 0; }
     static get E_FAIL() { return 1; }

     // Niveau de debug
     static get ALL() { return 0; }
     static get DEBUG() { return 10; }
     static get ERROR() { return 50; }
     static get FATAL() { return 100; }


     // Message server <-> client
     static get MSG_UNDEF() { return 'undef';} 
     static get MSG_ERROR() { return 'error';} 
     static get MSG_ERROR_ERRNO() { return 'error_no';} 
     static get MSG_DATA() { return 'data';} 
     static get MSG_ERROR_DATA() { return BRIConst.MSG_DATA;} 

     static get MSG_2SERVER_USER() { return 'user';} 
     static get MSG_2SERVER_RESA() { return 'resa';} 

     static get MSG_2SERVER_REQUETE() { return "requete"; }
     static get MSG_2SERVER_TYPE() { return "type"; }
     static get MSG_2SERVER_ARGS() { return "args"; }

     // URL des services
     static get URL_SERVICE() {return '../../server/WS/BRIWS.php';}
     
}