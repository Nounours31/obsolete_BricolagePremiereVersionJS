'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-08 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2074';
    this._commitGIT = 'f20ce7371fe31dc4d3fe57a6ad77e9d346da505f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}