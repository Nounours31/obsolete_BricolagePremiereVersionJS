'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-23 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-790';
    this._commitGIT = 'eabddb2c7f39f781eb1fea13f84a786a3b3d0d85';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}