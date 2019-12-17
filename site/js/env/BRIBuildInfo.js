'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-17 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-764';
    this._commitGIT = 'e8814db79e25dcf49bb71206f374676bbea2f630';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}