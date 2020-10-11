'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-11 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1962';
    this._commitGIT = '63fd792e1df5efd37f1934cb414aca8ec9971e1d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}