'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-13 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1970';
    this._commitGIT = '5333ee4943947514ae9dafcd170896a944621024';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}