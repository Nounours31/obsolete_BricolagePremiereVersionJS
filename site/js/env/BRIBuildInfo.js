'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-14 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-877';
    this._commitGIT = 'f8496590b05f7a518c6f77833607d2a2415139b2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}