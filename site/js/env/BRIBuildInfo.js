'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-01 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-455';
    this._commitGIT = '60a09ad27d50b1769dae39696a073ed0b050029b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}