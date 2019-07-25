'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-25 12:00:14';
    this._versionBuild = 'jenkins-Bricolage-184';
    this._commitGIT = '4af9213b70fdbb2d43772fc29e4e4b3a5a6ca6f9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}