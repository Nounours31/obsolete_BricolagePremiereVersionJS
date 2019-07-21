'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-21 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-168';
    this._commitGIT = 'cd0eae4ff132fc98332b9cc65f0ec55fe53817e7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}