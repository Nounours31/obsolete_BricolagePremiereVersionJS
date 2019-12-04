'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-04 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-711';
    this._commitGIT = 'e3696e7e22e0daa6cb5fe8de4c272815bdd50000';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}