'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-13 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1600';
    this._commitGIT = '649ffc15f9b44904e3316cede256af85bff54df3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}