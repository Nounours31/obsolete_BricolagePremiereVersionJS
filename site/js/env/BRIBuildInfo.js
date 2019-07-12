'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:53:07';
    this._versionBuild = 'jenkins-Bricolage-112';
    this._commitGIT = 'fe9c4bc14042179774fa77bee451e2de31b6d14a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}