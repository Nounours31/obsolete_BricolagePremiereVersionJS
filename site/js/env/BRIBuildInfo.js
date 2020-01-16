'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-16 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-884';
    this._commitGIT = '19d262551a85a063457c9ad756dda779f636cf59';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}