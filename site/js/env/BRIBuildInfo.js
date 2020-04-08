'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-08 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1216';
    this._commitGIT = '194f656a3230556ae435d51aaf987eb22c026154';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}