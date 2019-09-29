'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-29 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-448';
    this._commitGIT = '56ffa0627388a3db1e2b2e5f53026c8974e6b62b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}