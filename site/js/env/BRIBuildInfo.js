'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-29 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-449';
    this._commitGIT = '34798973fbf8db13bdb0746cf1c9104543d79cae';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}