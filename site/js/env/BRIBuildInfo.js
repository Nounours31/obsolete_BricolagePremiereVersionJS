'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-24 08:00:12';
    this._versionBuild = 'jenkins-Bricolage-179';
    this._commitGIT = '78fb3912e458943676a599b47b71787c10b80cc0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}