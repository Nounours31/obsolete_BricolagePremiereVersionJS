'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-07 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1702';
    this._commitGIT = '71f8abcae898dd74aa252de2faa39871c4628804';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}