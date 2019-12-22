'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-22 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-784';
    this._commitGIT = '33aba4ff55021ebbea903594511b388358694e4a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}