'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-19 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1626';
    this._commitGIT = 'b5f773a7a9284138a38cd49dcf02034d5c18c1a6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}