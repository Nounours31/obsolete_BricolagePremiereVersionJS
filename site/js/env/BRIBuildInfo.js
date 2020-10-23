'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-23 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-2008';
    this._commitGIT = '1ee6fa8ea7fab6df681dcfc68e95e44c3ff848e9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}