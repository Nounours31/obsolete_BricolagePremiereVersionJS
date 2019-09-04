'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-04 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-349';
    this._commitGIT = '394dee6c60a77c6871b7f54949bcb807d47f585e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}