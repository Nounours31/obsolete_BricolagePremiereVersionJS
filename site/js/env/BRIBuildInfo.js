'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:06:54';
    this._versionBuild = 'jenkins-Bricolage-99';
    this._commitGIT = '22ef81367af4415f5f0f42a22ce652a451414629';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}