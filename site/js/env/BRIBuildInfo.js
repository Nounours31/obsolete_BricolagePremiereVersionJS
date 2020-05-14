'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-14 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1362';
    this._commitGIT = 'd80759815ec476e03c0b0eb013b7eb1d802823e8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}