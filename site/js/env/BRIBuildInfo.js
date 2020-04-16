'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-16 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1247';
    this._commitGIT = '94d709d5e5951c0f7dd3d61746fe9fc43fc53635';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}