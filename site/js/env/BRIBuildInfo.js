'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-23 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-914';
    this._commitGIT = 'ae673be65fc7e70de3e8b8455ca399ab6f7d5cd8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}