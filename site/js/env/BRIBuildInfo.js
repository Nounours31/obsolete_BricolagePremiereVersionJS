'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-03 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1440';
    this._commitGIT = '5d786426b77df456aa2348afe3969d2aa3c5e1ed';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}