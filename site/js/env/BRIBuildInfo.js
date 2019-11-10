'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-10 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-615';
    this._commitGIT = 'c253740282a83c74b8127c01fc093767175f1065';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}