'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-27 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1656';
    this._commitGIT = '0f01cfb9fe7182de4bbac2a12d227d7ae1f04b69';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}