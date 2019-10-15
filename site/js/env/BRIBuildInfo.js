'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-15 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-513';
    this._commitGIT = '8b023ae83e634fee833c2cad39e67d88fe9653b0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}