'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-17 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-276';
    this._commitGIT = '07e98c6fbcc1f96710a5e35ed60777cdc1486265';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}