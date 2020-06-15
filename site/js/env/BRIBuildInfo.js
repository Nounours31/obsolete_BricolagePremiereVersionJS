'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-15 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1489';
    this._commitGIT = '0ab682666f92a8550545191f73469519e7f0113a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}