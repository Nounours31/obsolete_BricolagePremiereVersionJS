'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-16 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1614';
    this._commitGIT = 'c7bce541c83758e86ed6dc14062c009fb91094f9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}