'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-11 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1350';
    this._commitGIT = '10089d406e586efc08c0005294d79f431b2e6b8e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}