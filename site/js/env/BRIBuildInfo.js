'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-01 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1921';
    this._commitGIT = '9df0f051da6041748da8f617372996832b5424f0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}