'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-13 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1847';
    this._commitGIT = '46426b51a9a59873e6f149184d8a205fc6b22b48';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}