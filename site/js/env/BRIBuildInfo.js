'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-10 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-2081';
    this._commitGIT = 'd1906892ebc4b80f2e9748a803cd99bd7c4f7cbe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}