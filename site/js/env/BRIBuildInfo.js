'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-26 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-1408';
    this._commitGIT = '776f9132f373428aa591fa5e924ec9efb0b578f3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}