'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-16 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-1492';
    this._commitGIT = '2e70e1c30839076a1b9c1af928351521f675ca9d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}