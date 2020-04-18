'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-18 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1256';
    this._commitGIT = '88a682bdc2e68c4d6d9e3e2da6b8c4e5a1b454ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}