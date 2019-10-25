'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-25 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-552';
    this._commitGIT = '6d460355ea5bc4ab5d735fd24b83bd8c7b95bb6d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}