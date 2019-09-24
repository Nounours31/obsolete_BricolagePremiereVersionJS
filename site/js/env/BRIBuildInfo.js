'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-24 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-430';
    this._commitGIT = '7816f3d644c94b4e4c3250f94f7f03c6a0b82272';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}