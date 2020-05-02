'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-02 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1313';
    this._commitGIT = 'b40d96b59dc9f8bf67573f4888ffa1ea748b2886';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}