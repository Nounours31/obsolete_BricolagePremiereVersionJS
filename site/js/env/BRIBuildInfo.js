'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-13 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-871';
    this._commitGIT = '2e5a5edd0d7ed157af3d31289a5d81675d07de51';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}