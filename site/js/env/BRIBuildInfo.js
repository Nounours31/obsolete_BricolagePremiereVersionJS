'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-25 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-675';
    this._commitGIT = '0e594f06e484940ef9e88466266b02d3019f53e4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}