'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-08 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-486';
    this._commitGIT = 'abd771a2d4bf827a03d8516fa992003a42f253a9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}