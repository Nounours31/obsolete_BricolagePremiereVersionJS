'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-12 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1595';
    this._commitGIT = 'deab8c4dc5da91d25f94dc2177b2cb562c35b65e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}