'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-18 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1620';
    this._commitGIT = '82f7a6d83aa8dfca11c1a610852fcaae67d8e963';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}