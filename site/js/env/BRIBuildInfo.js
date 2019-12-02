'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-02 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-706';
    this._commitGIT = 'a350752ce455a491e6dbaf5572d86cadd5c231ae';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}