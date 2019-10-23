'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-23 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-543';
    this._commitGIT = '4787c26f352e9bf2e47e1874bbcd947fbad64071';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}