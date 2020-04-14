'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-14 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1240';
    this._commitGIT = 'bc4adaad679f605cc1dc135c6a0f707c20daba50';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}