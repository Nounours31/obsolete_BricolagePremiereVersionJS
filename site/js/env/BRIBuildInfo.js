'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-30 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1791';
    this._commitGIT = 'd1dddf4426729c1dc42073d2dee3ba86d8c1d390';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}