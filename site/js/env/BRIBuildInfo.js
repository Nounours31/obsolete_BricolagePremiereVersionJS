'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-14 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1116';
    this._commitGIT = '8f7fe6dcf517b3f1293a1fe942e92f6d190aa2f0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}