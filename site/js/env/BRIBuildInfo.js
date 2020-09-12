'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-12 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1846';
    this._commitGIT = '47a8b5a3f1811f3f117a82e2d5d1207c6ad2ebfc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}