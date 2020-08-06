'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-06 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1695';
    this._commitGIT = '59558fccda996112e00e992852774e7d341f562b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}