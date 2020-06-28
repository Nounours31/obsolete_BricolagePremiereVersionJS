'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-28 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1542';
    this._commitGIT = '06b2c839693af5048bfa08c0dcfb22df2a9388c9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}