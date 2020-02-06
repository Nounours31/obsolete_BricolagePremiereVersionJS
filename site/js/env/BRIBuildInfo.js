'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-06 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-967';
    this._commitGIT = '62dc9faeb72376cf8ec58b62f39fdfabd2038c0d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}