'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-21 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1512';
    this._commitGIT = '3a7105ff6e5b6443ca0bc961fafc39b54e47fec6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}