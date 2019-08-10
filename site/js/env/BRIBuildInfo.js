'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-10 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-247';
    this._commitGIT = 'c1a003699b2f3df165655fcfb0d74a9cb7f843e6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}