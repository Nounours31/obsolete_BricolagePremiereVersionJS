'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-15 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-267';
    this._commitGIT = '2739e96e2695ab8a6eda28241ca8a9316507bdd3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}