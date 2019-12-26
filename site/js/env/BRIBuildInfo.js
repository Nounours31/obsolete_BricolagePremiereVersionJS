'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-26 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-802';
    this._commitGIT = '7599800a1de87f2ea5cb69d3d92c3627e44bfdda';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}