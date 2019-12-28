'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-28 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-809';
    this._commitGIT = '6f49ba00f68fc5a66ed7c0e63b76da8de0fd5023';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}