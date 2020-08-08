'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-08 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1706';
    this._commitGIT = '4deefc6bc853e6e88adaba916830f8a00ae0d685';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}