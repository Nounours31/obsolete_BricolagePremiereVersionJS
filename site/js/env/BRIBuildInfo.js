'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-30 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-330';
    this._commitGIT = 'be29cbc21e619523c23f4491430c04d6d5d3f126';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}