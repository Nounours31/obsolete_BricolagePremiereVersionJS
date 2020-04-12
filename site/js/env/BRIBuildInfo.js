'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-12 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1232';
    this._commitGIT = '0a69150db7a5f78a1807651de2c175ef32900823';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}