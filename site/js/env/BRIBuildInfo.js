'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-30 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-817';
    this._commitGIT = 'f8f2817c237da5c09fa02681f1ba74a4b35af798';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}