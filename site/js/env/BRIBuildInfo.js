'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-18 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-770';
    this._commitGIT = 'b15a1093074be903a97f1c208c2b4b6a5c264c96';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}