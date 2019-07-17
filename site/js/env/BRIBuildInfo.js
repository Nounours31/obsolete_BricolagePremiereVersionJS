'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-17 16:00:13';
    this._versionBuild = 'jenkins-Bricolage-153';
    this._commitGIT = 'a06718172bbbfdb88461f85d4a39ce60b4f2db60';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}