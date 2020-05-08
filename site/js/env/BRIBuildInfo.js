'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-08 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1338';
    this._commitGIT = '326c4dbee70a6ae92d75184021e7061580617e9d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}