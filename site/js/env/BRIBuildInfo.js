'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-29 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-935';
    this._commitGIT = 'dbcaa87729615f2b23caf47d877c3ff0e7e99b46';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}