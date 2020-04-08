'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-08 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1215';
    this._commitGIT = 'b7f7df880ca81f0204f1e29524ec021d5b9c108e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}