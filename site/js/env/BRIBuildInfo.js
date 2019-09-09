'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-09 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-367';
    this._commitGIT = '4e240b6365c4a15f7f4cc4864bb6fbca85410d66';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}