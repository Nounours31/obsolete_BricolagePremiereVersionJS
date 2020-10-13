'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-13 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1969';
    this._commitGIT = '288708d24a5cb90c1cd549773c6739dd1d83243c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}