'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-25 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-554';
    this._commitGIT = '9f7e18e2e11eb7f3d4fc775a0fd6a66c8fac6696';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}