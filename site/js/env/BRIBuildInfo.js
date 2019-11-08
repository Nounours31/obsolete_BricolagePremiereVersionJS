'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-08 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-609';
    this._commitGIT = '002a7d983e05db6b22165e824022638e0cc544f0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}