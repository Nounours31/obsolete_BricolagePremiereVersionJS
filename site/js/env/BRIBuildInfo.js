'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-25 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-678';
    this._commitGIT = 'a7e336655116769eb690d18ef7544d77f37c5b69';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}