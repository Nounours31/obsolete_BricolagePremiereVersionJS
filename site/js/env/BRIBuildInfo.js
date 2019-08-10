'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-10 16:00:13';
    this._versionBuild = 'jenkins-Bricolage-249';
    this._commitGIT = '8cfbbc6003199220b78a53f79b8a400eb4c4f258';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}