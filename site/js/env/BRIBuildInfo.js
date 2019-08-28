'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-28 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-319';
    this._commitGIT = 'fae6b71277402300691b6cce0503ea60446c44e7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}