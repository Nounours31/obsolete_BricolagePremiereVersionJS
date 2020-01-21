'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-21 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-906';
    this._commitGIT = '991c64c420f2058e49acebed0e81291119dd8656';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}