'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-27 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-2147';
    this._commitGIT = 'b32635d13d970af01b65b9a56fa89842179bf624';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}