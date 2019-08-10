'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-10 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-248';
    this._commitGIT = '1cca67c0a24af2b5a1c3b19a55b5430dfd977da3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}