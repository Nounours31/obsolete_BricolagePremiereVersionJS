'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-03 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1318';
    this._commitGIT = 'a45f9c961cf7c71d9a5ff4ec95b7026929c369f7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}