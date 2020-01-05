'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-05 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-840';
    this._commitGIT = 'b8af23226b30b6d0c2f80ed4e6e0f955fa2ae41e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}