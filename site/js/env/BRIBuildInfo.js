'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-30 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1305';
    this._commitGIT = '2f913158bb0731435290632a4f092773e6d11f22';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}