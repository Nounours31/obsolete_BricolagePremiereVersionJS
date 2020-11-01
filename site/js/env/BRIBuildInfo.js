'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-01 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2046';
    this._commitGIT = '3786188bdd50f4f98f36abe89f4b7cabb0c93676';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}