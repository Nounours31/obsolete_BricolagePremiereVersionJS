'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-13 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-505';
    this._commitGIT = '7ec3ad8c2f623fdc06b049d2a441897b0b71e66c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}