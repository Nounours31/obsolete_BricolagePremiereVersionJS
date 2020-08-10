'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-10 12:00:10';
    this._versionBuild = 'jenkins-Bricolage-1712';
    this._commitGIT = '1444f0ac0a14ca516fc8d2c0e697fd1b6b12ef71';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}