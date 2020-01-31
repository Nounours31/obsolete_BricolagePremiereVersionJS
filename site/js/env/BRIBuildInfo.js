'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-31 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-943';
    this._commitGIT = '816b08eb4533537899d53f3dbb4e8c688de346b9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}