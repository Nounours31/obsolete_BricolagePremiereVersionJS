'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-06 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-844';
    this._commitGIT = '8d4054c1930c12fe3f2f934492eb96a2ef8b7b5f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}