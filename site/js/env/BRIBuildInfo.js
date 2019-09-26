'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-26 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-438';
    this._commitGIT = 'cfc2969077f82cdff20eb9028be2bb7c3e54f094';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}