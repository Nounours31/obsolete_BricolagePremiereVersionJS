'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-07 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2187';
    this._commitGIT = '5543da15bc09aad158b3c1e7483a1192fe2e8181';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}