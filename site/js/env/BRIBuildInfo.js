'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-10 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-984';
    this._commitGIT = 'd702d98eb0c2ae0312b885d9d29e4be7094e07d7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}