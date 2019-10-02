'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-02 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-460';
    this._commitGIT = 'e05e9d6f2ccfb0e20ee52625eb722db43a526f78';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}