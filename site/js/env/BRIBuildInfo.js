'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-30 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-454';
    this._commitGIT = 'fac64a574bb1851461ad921463f6d452e146aa74';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}