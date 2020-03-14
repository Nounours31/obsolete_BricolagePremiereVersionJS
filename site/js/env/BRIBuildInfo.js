'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-14 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1115';
    this._commitGIT = 'b755685034e3599c6969f64249436a1ad998c9c9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}