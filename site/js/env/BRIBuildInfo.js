'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-11 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1349';
    this._commitGIT = '00f8f88a4d83a1e978e1ae07f2e9b396852d4d5b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}