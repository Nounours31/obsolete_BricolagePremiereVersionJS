'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-27 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-2149';
    this._commitGIT = '58284f6f142c6113606dcb6b6c5933941815cb31';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}