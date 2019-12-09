'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-09 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-733';
    this._commitGIT = 'c5900a84fd1e590f651af5d97049f79a0350d128';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}