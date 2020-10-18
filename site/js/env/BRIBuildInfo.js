'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-18 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1989';
    this._commitGIT = 'ce086af4dfaf40228fdec7b6d09ce316dcf1f63a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}