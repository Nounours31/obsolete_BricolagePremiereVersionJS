'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-16 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-640';
    this._commitGIT = '288b352eb0671dabf37cdeca90331e9df3f03625';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}