'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-27 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-562';
    this._commitGIT = '0382ba9178c585766e732b0cf7b1d7e8db412ba7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}