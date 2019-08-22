'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-22 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-297';
    this._commitGIT = '3959892c50858d5c210af2d48524f416bbe33a4e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}