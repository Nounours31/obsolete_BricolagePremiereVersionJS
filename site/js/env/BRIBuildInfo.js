'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-11 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-621';
    this._commitGIT = '4eee366c17b2652af705447d0765bf7869f50ebe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}