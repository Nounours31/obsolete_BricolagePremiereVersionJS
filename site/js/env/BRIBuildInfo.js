'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-16 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1861';
    this._commitGIT = '6a7f9e6c51d10726f1d3d9e2f48d100e3906a57d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}