'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-26 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1166';
    this._commitGIT = '2f910ae517c8c5f6c9e710d3a1cc82850551eb4a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}