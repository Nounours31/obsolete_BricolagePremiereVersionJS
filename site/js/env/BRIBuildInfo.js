'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-12 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1231';
    this._commitGIT = 'a6894b6fd1aed85cd056e83ee1fe8c2ee89dcc81';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}