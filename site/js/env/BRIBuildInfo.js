'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-10 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1957';
    this._commitGIT = '1c2a6e97674cdf819c377c39dc612daec1aa4d35';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}