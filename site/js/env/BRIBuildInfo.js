'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-31 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1427';
    this._commitGIT = 'c1fa6777e13214c7b3779722faa7c84954889147';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}