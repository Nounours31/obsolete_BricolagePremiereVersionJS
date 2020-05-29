'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-29 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1419';
    this._commitGIT = 'dec0d03bda407bb7953076b566591cf6d3a677e8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}