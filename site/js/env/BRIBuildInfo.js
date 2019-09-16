'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-16 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-398';
    this._commitGIT = '38b3f15b114474dd876f3050ebc6b61cb1b38bef';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}