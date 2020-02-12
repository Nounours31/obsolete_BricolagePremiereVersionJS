'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-12 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-991';
    this._commitGIT = '8e865a28d7faa6a4908fe708fa0ac7d6f3f1315c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}