'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 13:06:57';
    this._versionBuild = 'jenkins-Bricolage-130';
    this._commitGIT = 'f0d282a7ecebca7dc0ae49ef0d2c49549afd29b0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}