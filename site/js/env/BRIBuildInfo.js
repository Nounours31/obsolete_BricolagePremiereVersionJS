'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-02 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1803';
    this._commitGIT = '09874f4c6680ebfd6d307aed5bebfcfb355f904a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}