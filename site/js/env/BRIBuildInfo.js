'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-01 08:00:11';
    this._versionBuild = 'jenkins-Bricolage-1551';
    this._commitGIT = 'd9dbface76d8ac0f34aa0a89cd7cf35f9e5dcc92';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}