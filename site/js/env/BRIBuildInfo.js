'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-06 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-358';
    this._commitGIT = 'd3d917078459c6299c86638d65398c5bd32e50ba';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}