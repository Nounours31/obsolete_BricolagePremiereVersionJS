'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-27 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-560';
    this._commitGIT = 'ab51f412e5c5c5f09e498fbc18521a825ae3bf8d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}