'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-11 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1471';
    this._commitGIT = '1f441d996ffd0afb3a4754db9544812e6ec8713f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}