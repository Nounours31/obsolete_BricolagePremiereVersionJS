'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-12 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-624';
    this._commitGIT = 'e1d696906bbe0acee08c933bd3e06c6c1a9f8cae';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}