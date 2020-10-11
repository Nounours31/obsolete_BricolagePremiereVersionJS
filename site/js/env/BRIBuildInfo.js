'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-11 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1959';
    this._commitGIT = '9ba4fa5fa8040abe2e7daf150f3890b20b565815';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}