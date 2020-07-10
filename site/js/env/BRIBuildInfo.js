'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-10 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1590';
    this._commitGIT = '1437fd1e89163836789d676c44e148ab28763937';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}