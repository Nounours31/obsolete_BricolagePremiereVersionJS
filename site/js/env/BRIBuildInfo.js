'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-08 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1091';
    this._commitGIT = '9a8d766a623161e3486b69a482f5ab5133163876';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}