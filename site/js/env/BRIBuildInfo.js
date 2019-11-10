'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-10 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-618';
    this._commitGIT = 'c6875b054637612bb8b40dd11789d5b854dd734a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}