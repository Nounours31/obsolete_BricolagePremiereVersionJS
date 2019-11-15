'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-15 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-636';
    this._commitGIT = '739eb00a84f096c44e2b96c1a268f16fd7212cbf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}