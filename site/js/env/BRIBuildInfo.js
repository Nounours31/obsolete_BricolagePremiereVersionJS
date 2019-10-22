'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-22 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-540';
    this._commitGIT = 'b5bb886680404af43ca732c5c1227d0a3bc63b37';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}