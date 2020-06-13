'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-13 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1479';
    this._commitGIT = 'd279413cc3067d147eca78247fe5bbc875158ccf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}