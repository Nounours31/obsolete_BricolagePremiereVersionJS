'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-20 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1630';
    this._commitGIT = '1c53b4d3d7aec8c138720b1d880a0881e44f5a1d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}