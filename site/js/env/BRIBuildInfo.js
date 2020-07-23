'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-23 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1642';
    this._commitGIT = '600a068386d67fc75f32a8f694d5fa0401d3f829';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}