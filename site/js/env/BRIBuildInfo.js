'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-23 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-425';
    this._commitGIT = '75564bce007b116adef0cd0b33f3d7038be2165e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}