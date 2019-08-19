'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-19 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-286';
    this._commitGIT = '93edee5d9a95b7af41cc88f2fb0823c27ff57946';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}