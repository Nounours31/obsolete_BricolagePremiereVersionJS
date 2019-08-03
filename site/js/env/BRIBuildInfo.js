'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-03 16:00:12';
    this._versionBuild = 'jenkins-Bricolage-221';
    this._commitGIT = 'ebfddac3e852cc9701f8bb0afbaa1e7b370ea530';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}