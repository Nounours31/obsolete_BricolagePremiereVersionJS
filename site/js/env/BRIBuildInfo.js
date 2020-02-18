'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-18 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1015';
    this._commitGIT = '4ff2816d7347f1ba330b0bb3915355851e633cce';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}