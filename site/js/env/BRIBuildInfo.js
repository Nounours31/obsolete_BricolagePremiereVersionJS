'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-17 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-520';
    this._commitGIT = 'dd2294369c06aa5d2f9cf07f7ccc952be84522e2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}