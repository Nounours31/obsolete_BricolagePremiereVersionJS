'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-09 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-858';
    this._commitGIT = '191331d1ffac87703157e2c2bca8748b06ce8dbe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}