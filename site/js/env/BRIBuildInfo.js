'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-16 16:00:13';
    this._versionBuild = 'jenkins-Bricolage-149';
    this._commitGIT = '336f768666f8d13ff240be145bb138d1b3599fde';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}