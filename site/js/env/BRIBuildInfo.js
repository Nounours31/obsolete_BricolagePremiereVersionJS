'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-17 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1986';
    this._commitGIT = '75f2e0e8a825a65452b99b268c48fda28d0079ff';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}