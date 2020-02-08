'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-08 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-976';
    this._commitGIT = 'a75552bd131ffae30503c0863dba5a8116182605';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}