'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-04 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2057';
    this._commitGIT = '820038580c60941a77c3594673b7a0f9740e4fd9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}