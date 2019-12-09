'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-09 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-734';
    this._commitGIT = '30d6a1853d5ef06815584bb1a659bd59f6e14adc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}