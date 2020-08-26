'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-26 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1777';
    this._commitGIT = '9e05f8324892c4221cd1086e18d7561597a4f165';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}