'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-04 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2178';
    this._commitGIT = 'd23c953edc492ca4c32ae612a12fd18eb068db0d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}