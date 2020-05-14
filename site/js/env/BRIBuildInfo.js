'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-14 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1360';
    this._commitGIT = 'd5d10c544a23ef4eec368d0e708e018804602fa2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}