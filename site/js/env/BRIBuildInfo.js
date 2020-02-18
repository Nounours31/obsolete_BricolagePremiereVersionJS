'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-18 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1018';
    this._commitGIT = '5360ba23f6ea490deffc112dfcc170a5ddde52f0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}