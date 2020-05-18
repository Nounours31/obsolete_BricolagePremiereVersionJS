'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-18 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1377';
    this._commitGIT = 'ed5dfdf5322f0440c3251c16056e103305603ecf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}