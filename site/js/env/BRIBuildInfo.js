'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-20 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-655';
    this._commitGIT = 'b38a2a954ed3f71307526b4853c6ef678d626e0f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}