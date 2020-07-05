'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-05 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1570';
    this._commitGIT = '3d38bc43c43d00bb0b209416853f8928d827d964';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}