'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-05 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-354';
    this._commitGIT = '20bf3d53818f464706e52e009fcb3c1f82c14e8d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}