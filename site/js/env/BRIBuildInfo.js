'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-28 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-196';
    this._commitGIT = '2090f15829e3425ad90c7ec1c9d6ab2284929d35';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}