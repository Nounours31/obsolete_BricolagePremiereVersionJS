'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-04 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-348';
    this._commitGIT = '29e49d4ea9ba67aae41f874907d9b5926062511a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}