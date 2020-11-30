'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-30 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2160';
    this._commitGIT = 'f69b4d339fdde1612e3935a424a5086e728ed4b2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}