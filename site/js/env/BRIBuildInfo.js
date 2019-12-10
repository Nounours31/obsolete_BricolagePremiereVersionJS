'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-10 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-738';
    this._commitGIT = '08a2a1c8c8b28a82d4106126ca307e53d05f532d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}