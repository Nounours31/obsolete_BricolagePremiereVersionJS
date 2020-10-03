'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-03 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1929';
    this._commitGIT = '72eeaccbe062daf48425af6de002237046857ade';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}