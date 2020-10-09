'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-09 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1954';
    this._commitGIT = '1ce62573d9425657ee88b27326ac4180c431cd40';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}