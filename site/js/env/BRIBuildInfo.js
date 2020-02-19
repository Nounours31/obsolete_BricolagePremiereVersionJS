'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-19 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1020';
    this._commitGIT = 'a0bb8edc44ffbff16310723138d11977b01ceeb3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}