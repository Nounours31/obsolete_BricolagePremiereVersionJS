'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-18 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-523';
    this._commitGIT = 'a6570052e2147a18a46e42b0f7a6e80ae76c01de';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}