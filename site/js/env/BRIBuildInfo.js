'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-03 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1317';
    this._commitGIT = '29e70f3dfad929c92f6cbb39b6067827f641b015';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}