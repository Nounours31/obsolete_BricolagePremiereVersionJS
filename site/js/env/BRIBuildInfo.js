'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-26 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1531';
    this._commitGIT = '005fd9ec42108a89ff206e3785d955b53f80ede5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}