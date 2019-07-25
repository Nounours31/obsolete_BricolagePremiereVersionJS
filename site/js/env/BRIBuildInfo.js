'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-25 16:00:13';
    this._versionBuild = 'jenkins-Bricolage-185';
    this._commitGIT = '9e3297e775b18065a4c356b19432f9acdf12c326';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}