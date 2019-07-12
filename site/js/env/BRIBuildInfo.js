'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:08:08';
    this._versionBuild = 'jenkins-Bricolage-100';
    this._commitGIT = '7084f289e9589b008d74ee226202359b48100618';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}