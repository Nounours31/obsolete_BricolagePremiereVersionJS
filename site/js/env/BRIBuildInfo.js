'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-17 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1012';
    this._commitGIT = '7afdc151028a7cbe7bad0a9171e556c0d7398a5a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}