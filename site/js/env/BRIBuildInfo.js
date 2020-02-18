'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-18 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1017';
    this._commitGIT = '880009ae2c8467d12040625c8650864b04cb5921';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}