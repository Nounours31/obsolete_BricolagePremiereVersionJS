'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-11 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1715';
    this._commitGIT = '8dde202cc57d684b2f1274333f866a387ac3a41d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}