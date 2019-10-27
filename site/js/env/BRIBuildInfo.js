'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-27 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-559';
    this._commitGIT = '79ab511ec16e95b3721e00e9a9c485ee9bc09351';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}