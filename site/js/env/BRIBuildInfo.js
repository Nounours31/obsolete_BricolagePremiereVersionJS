'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-02 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2049';
    this._commitGIT = 'f90b59413085678a8c534079bce49ef1b1f20518';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}