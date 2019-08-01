'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-01 20:00:14';
    this._versionBuild = 'jenkins-Bricolage-214';
    this._commitGIT = 'f0b955895743748c3a2475dbab2908b637ff2f5f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}