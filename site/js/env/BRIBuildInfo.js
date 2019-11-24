'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-24 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-673';
    this._commitGIT = 'ffc452f6208a4df8f53ed37ce17ae8d1c52bde85';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}