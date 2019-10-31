'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-31 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-577';
    this._commitGIT = '23d8b5380a3076ba1e4485544421a56ce2007cbf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}