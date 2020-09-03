'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-03 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1807';
    this._commitGIT = 'a4a6205cfc09a925bccad8720ca6cfc844c176e8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}