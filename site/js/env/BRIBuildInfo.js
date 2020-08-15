'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-15 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1734';
    this._commitGIT = '663778026137a773bbba9b91e2e6667143816124';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}