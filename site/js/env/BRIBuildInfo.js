'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-13 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-386';
    this._commitGIT = '4cf294403fccbf84688ceeb70ac093044da75712';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}