'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-11 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2084';
    this._commitGIT = '3a7affdf12b5086a93abdf89b1245f6af1b01e7c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}