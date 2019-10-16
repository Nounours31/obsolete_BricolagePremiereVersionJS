'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-16 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-517';
    this._commitGIT = '2f4cc230f31f1accc85431bca2afa462c7cbfd21';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}