'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-21 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1758';
    this._commitGIT = '984783274168a7089d6be9ff4fad1494db2d2d59';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}