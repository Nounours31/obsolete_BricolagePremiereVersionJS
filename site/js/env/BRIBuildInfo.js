'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 13:08:07';
    this._versionBuild = 'jenkins-Bricolage-131';
    this._commitGIT = '6b3b86be36cbefc919eb14cc6082f8308c3c5ae5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}