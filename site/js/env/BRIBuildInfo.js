'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-30 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1792';
    this._commitGIT = 'cc9d68bad08033f52d11b878b840f70d1b739af4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}