'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-03 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-219';
    this._commitGIT = '3481ba6ee6690a21e3a19c57b0e5c9d7a290a78b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}