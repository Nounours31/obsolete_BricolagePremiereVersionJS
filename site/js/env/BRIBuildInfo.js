'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-28 08:00:11';
    this._versionBuild = 'jenkins-Bricolage-195';
    this._commitGIT = '304bd9c9361b84f5c83cb2a00a3b940c5b1eddbd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}