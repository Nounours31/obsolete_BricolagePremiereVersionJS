'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-20 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1998';
    this._commitGIT = '514a072001fccafcae5a4f5db498dd94e7a54071';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}