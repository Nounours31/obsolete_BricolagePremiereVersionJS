'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-28 12:00:10';
    this._versionBuild = 'jenkins-Bricolage-1660';
    this._commitGIT = 'ac0b68864fc99b2d9817ce1df2181b6ef4bb5a32';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}