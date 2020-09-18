'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-18 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1868';
    this._commitGIT = '0e30680ef16e9ce18376ba9c2860e333415e8a33';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}