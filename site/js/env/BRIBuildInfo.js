'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-03 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1074';
    this._commitGIT = '5edf64ccb514a1a30421e74c3534f6dec6b82d7b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}