'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-22 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-663';
    this._commitGIT = '18bacac03c4976a74556c5817661cd0c4d8aebab';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}