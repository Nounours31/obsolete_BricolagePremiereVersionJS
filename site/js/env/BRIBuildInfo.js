'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-14 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-753';
    this._commitGIT = 'dd50f254752ed0246b08000fbcf287b9e10b1cfe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}