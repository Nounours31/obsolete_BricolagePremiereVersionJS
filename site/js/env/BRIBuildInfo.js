'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-21 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1756';
    this._commitGIT = 'a49da32adfa6a8ef472996b51c6776b004ef4846';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}