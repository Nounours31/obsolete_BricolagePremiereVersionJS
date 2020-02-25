'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-25 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1045';
    this._commitGIT = '8885af929f28565315c4db990f41e5bdd2c0e884';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}