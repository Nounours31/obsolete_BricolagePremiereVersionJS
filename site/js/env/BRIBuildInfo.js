'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-28 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-563';
    this._commitGIT = '450b756d39d1d85226fa7d027e07dc76566d8805';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}