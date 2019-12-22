'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-22 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-786';
    this._commitGIT = '14c97f5c4206e8748529e7c173772fdf38cd61fb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}