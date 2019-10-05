'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-05 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-471';
    this._commitGIT = '2e5aa2cd442368c892c1f8163a8b09a86632c810';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}