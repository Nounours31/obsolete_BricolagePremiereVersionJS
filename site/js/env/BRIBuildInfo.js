'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-31 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1673';
    this._commitGIT = '7f6d6b153b613179d47d9740ac4780b4a5ab5c84';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}