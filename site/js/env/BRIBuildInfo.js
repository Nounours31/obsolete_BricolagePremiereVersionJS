'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-19 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1136';
    this._commitGIT = 'ef0baabbfcbc96b9f3ab5e1ca897b3c834409f61';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}