'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-19 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1624';
    this._commitGIT = 'b6d58ea2ca270ef956a7448432b7fbd445ece905';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}