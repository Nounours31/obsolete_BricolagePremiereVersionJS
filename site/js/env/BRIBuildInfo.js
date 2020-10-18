'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-18 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1990';
    this._commitGIT = '91dab45b06aca5e60806a21a1cdd4f40a9563a72';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}