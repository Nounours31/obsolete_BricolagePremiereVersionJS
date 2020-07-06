'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-06 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1572';
    this._commitGIT = '094829448cd1b27c41158e043e2f97a88b38ec4f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}