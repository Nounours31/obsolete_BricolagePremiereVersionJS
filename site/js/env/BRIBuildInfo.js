'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-29 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-692';
    this._commitGIT = '4d69c7be9b17bb140e28f6ae2feba88f619f2411';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}