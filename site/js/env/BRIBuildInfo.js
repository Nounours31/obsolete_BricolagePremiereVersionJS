'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-07 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1333';
    this._commitGIT = '575d65226a41c61618c4370bb314f9f35de3741d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}