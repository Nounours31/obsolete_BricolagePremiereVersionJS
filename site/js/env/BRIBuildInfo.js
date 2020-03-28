'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-28 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1173';
    this._commitGIT = 'b6cbbf8a5703eef9ac5e14f8a3e0e45c58cb55e9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}