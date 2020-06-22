'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-22 12:00:10';
    this._versionBuild = 'jenkins-Bricolage-1516';
    this._commitGIT = 'addaad1a00f1fca6c0b25309074405f4481cddad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}