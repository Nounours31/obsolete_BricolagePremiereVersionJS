'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-05 12:00:10';
    this._versionBuild = 'jenkins-Bricolage-1692';
    this._commitGIT = 'adda1ed83ce4416ffcf886ef668f2ee41a0a1b7f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}