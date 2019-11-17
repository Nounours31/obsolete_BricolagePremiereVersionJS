'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-17 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-646';
    this._commitGIT = '6a3a159429f27160aa29f5af79d4b01dd7659f59';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}