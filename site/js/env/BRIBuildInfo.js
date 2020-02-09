'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-09 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-982';
    this._commitGIT = 'ce6f6898a7a1bd88427bff9405ae49b537bbbe0f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}