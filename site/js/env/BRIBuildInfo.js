'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-27 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-561';
    this._commitGIT = '568eb43938458691644369fda78fc358c5b4605e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}