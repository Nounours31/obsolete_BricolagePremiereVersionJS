'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-10 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1838';
    this._commitGIT = '2d70669c2c006d3be4ca4fd01ba3147465f52ae0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}