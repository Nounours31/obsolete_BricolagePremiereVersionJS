'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-21 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-292';
    this._commitGIT = '20e13b9f7085676a07a2b13a1ed1a47b4246bf51';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}