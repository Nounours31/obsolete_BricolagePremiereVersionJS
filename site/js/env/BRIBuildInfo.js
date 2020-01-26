'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-26 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-924';
    this._commitGIT = 'a29550e3a7c20bf64b4f76e40a36ea7c1604a219';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}