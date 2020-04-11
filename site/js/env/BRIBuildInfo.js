'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-11 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1228';
    this._commitGIT = 'f433de5dd5510efd3d01890b77dead5cd55e5ec5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}