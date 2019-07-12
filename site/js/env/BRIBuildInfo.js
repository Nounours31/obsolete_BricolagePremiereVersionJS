'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 13:03:07';
    this._versionBuild = 'jenkins-Bricolage-128';
    this._commitGIT = 'd52337c3417c2a27cf83025301fc1ee727526245';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}