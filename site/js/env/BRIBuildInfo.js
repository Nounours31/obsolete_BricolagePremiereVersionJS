'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-11 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1227';
    this._commitGIT = '1355b162721488cd5082c17232158e438ff9f742';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}