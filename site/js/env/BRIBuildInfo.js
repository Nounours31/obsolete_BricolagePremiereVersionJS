'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-05 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1447';
    this._commitGIT = 'fdf222a6f0eefb8a54b09d4271d16e35d90d968a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}