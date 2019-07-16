'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-16 20:00:13';
    this._versionBuild = 'jenkins-Bricolage-150';
    this._commitGIT = 'c7f35c12d79feddef3d8289d7aee724fd145c17f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}