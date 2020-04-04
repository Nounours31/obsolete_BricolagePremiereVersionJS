'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-04 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1202';
    this._commitGIT = 'fba9bc305a6583e804ef3a1f41b9189d48de153b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}