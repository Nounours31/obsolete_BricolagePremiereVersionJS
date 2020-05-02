'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-02 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1314';
    this._commitGIT = 'c172a5429e09aa629a41cfd8eb0b25d1e9383bc1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}