'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-01 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-580';
    this._commitGIT = '7a35df5c2b0383d044acdb94b170933fc9897c0a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}