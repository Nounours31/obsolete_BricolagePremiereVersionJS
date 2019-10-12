'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-12 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-502';
    this._commitGIT = '0bb4124ab358b4f170b6c161c8849c746e0af55e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}