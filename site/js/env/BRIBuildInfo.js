'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-12 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1964';
    this._commitGIT = 'e9554db0209ce527718f5f054c3b21d3a3248cf6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}