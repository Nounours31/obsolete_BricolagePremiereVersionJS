'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-17 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1865';
    this._commitGIT = '46272b382c63cacdda863aff0253c2831eb54a98';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}