'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-18 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1622';
    this._commitGIT = '0f34ef756dddfd7e02270edcba23c447b92e2d75';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}