'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-12 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1476';
    this._commitGIT = 'a4b1e267453fbfaaee78718e6b90513807d91a36';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}