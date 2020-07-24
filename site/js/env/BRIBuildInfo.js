'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-24 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1643';
    this._commitGIT = 'bbccd1cecfd5774291dcbdd89937dc8e942de875';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}