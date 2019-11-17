'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-17 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-645';
    this._commitGIT = '0d4a3a464acf65ec4e2d4a4ac2f7a2640372015d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}