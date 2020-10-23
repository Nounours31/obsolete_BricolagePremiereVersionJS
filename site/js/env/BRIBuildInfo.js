'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-23 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2009';
    this._commitGIT = 'aa35454b0fd8059c1f5af90cafe50ac75d7fb4c8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}