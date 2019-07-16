'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-16 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-147';
    this._commitGIT = 'a21f3c7e05664312fbbeda44a6754c3d958479e6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}