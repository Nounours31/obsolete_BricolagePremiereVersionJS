'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-06 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1698';
    this._commitGIT = 'e8ca9a64ba19760f1d1e2480bf90c5881ffa9af6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}