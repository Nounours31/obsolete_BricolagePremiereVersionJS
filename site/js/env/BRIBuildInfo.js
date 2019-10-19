'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-19 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-527';
    this._commitGIT = 'eec335da7c31024a47c271c94c0fe737b99c59cb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}