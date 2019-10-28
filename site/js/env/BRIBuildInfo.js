'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-28 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-564';
    this._commitGIT = 'd601b61965c3770add648f3d297c1fa8d5630509';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}