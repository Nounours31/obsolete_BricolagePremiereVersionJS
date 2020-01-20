'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-20 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-902';
    this._commitGIT = '7f2bb2fc593d55af5eb42af682e12574561aeaa8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}