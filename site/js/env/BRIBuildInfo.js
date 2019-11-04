'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-04 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-593';
    this._commitGIT = '2ac484f6b1274017ebaac1e4183481b5fb01b5a2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}