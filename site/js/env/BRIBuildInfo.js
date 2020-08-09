'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-09 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1709';
    this._commitGIT = '5f427aa0ab8786d2a14e59b6791cc841c9b2567e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}