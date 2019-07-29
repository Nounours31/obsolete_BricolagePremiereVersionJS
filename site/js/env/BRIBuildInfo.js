'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-29 08:00:12';
    this._versionBuild = 'jenkins-Bricolage-199';
    this._commitGIT = '53320580ad70cfad77f563721c43d60ea8578a23';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}