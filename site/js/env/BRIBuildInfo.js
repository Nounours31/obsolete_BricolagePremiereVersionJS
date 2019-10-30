'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-30 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-574';
    this._commitGIT = 'd7de85d66ee2fb79612a3537bfd2c3f9c471f597';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}