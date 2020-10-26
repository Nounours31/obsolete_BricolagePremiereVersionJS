'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-26 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2021';
    this._commitGIT = 'c44cab723f0f8b25b76fd1d10f1774cdfc5845dd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}