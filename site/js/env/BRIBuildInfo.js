'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-30 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1794';
    this._commitGIT = 'e4db374cd147fca1dc4ffb977e0295f0b124e370';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}