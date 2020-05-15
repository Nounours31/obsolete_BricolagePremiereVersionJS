'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-15 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1364';
    this._commitGIT = '49cf98b1b6e29da0ab4fc1d77287a67d9c745c82';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}