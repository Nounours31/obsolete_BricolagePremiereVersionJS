'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-05 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1694';
    this._commitGIT = '6df4bbc543cb2e28e9c169c289a1ed3dd7ea81ea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}