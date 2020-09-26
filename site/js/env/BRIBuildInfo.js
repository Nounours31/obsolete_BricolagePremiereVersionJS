'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-26 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1901';
    this._commitGIT = '32d0a4c8820ce623d5a5a759b072b92463fda68f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}