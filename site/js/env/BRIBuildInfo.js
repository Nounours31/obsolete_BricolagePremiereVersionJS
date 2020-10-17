'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-17 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1983';
    this._commitGIT = '443ab3b1548e76850526adbfeaea28349aa2ee9a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}