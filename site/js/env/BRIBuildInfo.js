'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-02 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1311';
    this._commitGIT = '49acdedcc670b542815c290655bc0d99d8f0da46';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}