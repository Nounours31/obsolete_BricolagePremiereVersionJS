'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-18 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1870';
    this._commitGIT = '1c94602d7f1e7d9548c384e80599db80c2dc1e53';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}