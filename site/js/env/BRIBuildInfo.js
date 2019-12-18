'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-18 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-767';
    this._commitGIT = '0f69cfc4f23a3f74537a4b7c6f001e13017f4c99';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}