'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-18 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-526';
    this._commitGIT = '47c3e4a5abd50ce3f87fbd6d446fc8a77194622e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}