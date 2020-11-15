'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-15 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-2099';
    this._commitGIT = 'f4b1c2d42011ec486f0c2e26f1ea8910fd99e58a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}