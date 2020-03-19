'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-19 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-1137';
    this._commitGIT = 'e026a02947062d3d4be421c7d91ecbf7ecebabeb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}