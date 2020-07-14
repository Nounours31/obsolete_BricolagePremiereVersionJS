'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-14 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1604';
    this._commitGIT = '1a32fc3644a9b58482377fc8a64c2a62ae877d13';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}