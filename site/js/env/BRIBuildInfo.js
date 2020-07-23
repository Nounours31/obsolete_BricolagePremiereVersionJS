'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-23 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1641';
    this._commitGIT = '1e3f743a0fcbc3ecbb27b0422abd6931c2d0348f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}