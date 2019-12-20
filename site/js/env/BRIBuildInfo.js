'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-20 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-778';
    this._commitGIT = 'adfd205ff70f0211878482b9164143a13e53a0fa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}