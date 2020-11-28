'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-28 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2154';
    this._commitGIT = 'b553dacdc6c95009f7bf560a8e19733571e40d97';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}