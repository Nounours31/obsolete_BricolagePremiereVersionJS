'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-23 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-424';
    this._commitGIT = 'a1ca32d226e143bd84eafc67034d353e22e70562';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}