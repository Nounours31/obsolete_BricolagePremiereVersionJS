'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-01 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-579';
    this._commitGIT = '47df0c62c12747ef035f2b1a1968c3a383635b0b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}