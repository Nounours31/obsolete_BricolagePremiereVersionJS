'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-03 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-590';
    this._commitGIT = 'a0ffff1e876db35b0dce148f9cb739e921b0b110';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}