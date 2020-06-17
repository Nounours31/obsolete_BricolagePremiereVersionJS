'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-17 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1498';
    this._commitGIT = '6c5dfdaf5bff0fd5e7f55b24b80e27a9bbbd0a02';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}