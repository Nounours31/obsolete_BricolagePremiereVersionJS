'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-20 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-414';
    this._commitGIT = 'e6c24b83c15195a47fe26e57515984897cbad139';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}