'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-11 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-989';
    this._commitGIT = '4804327f0af8c6f910871fbc51544fa4467bd6df';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}