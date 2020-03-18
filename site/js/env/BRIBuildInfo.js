'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-18 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1134';
    this._commitGIT = '2fa6465b9e36a7a28a566c2e73d9ecb52d28c06c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}