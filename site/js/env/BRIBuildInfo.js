'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-18 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2111';
    this._commitGIT = '54da96d9e2438994af7e954245e54c8dc49faa10';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}