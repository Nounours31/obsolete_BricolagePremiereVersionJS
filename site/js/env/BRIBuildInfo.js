'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-21 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-169';
    this._commitGIT = 'e099105a8301450ef781411970fd42b71e15070a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}