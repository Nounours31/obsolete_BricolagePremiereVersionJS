'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-30 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-451';
    this._commitGIT = '4f784fc2d14acba31eddd6dd283d5afcfdd402f3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}