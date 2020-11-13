'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-13 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2094';
    this._commitGIT = 'e6b748f84815648cabf0ba67616b652849c561f5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}