'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-22 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1148';
    this._commitGIT = '713eff6546f9f32d644c4eccebccefa1f70b5091';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}