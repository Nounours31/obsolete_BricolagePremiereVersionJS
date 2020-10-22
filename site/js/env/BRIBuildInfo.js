'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-22 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2006';
    this._commitGIT = '2e65de8e608ff8d5b84f2e9bae02e760bc2609b9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}