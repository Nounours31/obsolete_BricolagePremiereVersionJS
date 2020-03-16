'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-16 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1125';
    this._commitGIT = '6bfa8154900d6f3aef9d741f5bf61d622c16f2bd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}