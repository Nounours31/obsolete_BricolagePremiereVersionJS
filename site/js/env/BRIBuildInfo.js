'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-01 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1309';
    this._commitGIT = '3ddd585b37b85c8d90a436b3e523f19e7a065cf1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}