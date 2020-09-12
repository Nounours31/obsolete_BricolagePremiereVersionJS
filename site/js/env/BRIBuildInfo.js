'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-12 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1844';
    this._commitGIT = '281e721814193391766003cb82a6e573fd51e6db';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}