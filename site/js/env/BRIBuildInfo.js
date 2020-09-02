'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-02 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1804';
    this._commitGIT = 'bc6db0224d990ff25f972ad39f07e0af5cce3656';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}