'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:49:36';
    this._versionBuild = 'jenkins-Bricolage-124';
    this._commitGIT = '09478806ddf9be58649620b5d77a1ebebe045629';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}