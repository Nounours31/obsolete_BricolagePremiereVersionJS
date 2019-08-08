'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-08 20:00:15';
    this._versionBuild = 'jenkins-Bricolage-242';
    this._commitGIT = 'f7d02225dc5a0bebebb2e709a30574e81d9a6a47';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}