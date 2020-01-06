'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-06 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-846';
    this._commitGIT = 'a2e8f052510ef95f26953fac424c1a1cfb9e9f9d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}