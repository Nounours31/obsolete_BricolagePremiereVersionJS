'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-23 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-668';
    this._commitGIT = '023f5c4491363c79c12d36dbee82009f9375a532';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}