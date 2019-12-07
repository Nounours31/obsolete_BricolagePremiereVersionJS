'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-07 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-726';
    this._commitGIT = '6498260580daa89d6cba88a87b8ddb7af5cb354e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}