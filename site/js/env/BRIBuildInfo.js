'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-05 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1325';
    this._commitGIT = '34ffe1b61d3d19acd1893bea6b20d95a77d39823';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}