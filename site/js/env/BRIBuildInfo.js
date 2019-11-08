'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-08 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-608';
    this._commitGIT = 'f1beba6b96b02935be2fcacdf481526ff42d0363';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}