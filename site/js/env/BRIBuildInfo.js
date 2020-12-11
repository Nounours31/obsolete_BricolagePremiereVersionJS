'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-11 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2203';
    this._commitGIT = 'f6147a165b3248dd83f0f9fc1801fe98e9631f78';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}