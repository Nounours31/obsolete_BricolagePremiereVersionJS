'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-19 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1382';
    this._commitGIT = 'fe77aea0e0714778d5ac2f82fab37949efa50c9e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}