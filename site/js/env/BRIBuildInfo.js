'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-21 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-536';
    this._commitGIT = '26ae489cde34b7a495e0fb8fbdd9fa7698161104';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}