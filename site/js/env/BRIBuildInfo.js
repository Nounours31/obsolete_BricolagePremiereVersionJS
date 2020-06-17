'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-17 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1496';
    this._commitGIT = '69dc78d966651cf34bb756bb8dce46c7e3a751e4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}