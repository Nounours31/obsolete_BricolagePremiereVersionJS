'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-23 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-423';
    this._commitGIT = '5e1a21f2e7d4d7a1c851e520ad744f36628033eb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}