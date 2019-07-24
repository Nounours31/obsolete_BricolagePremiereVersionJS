'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-24 16:00:15';
    this._versionBuild = 'jenkins-Bricolage-181';
    this._commitGIT = '39f07f391d878503f8e203a7e90734ddf7cacb10';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}