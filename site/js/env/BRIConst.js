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
}