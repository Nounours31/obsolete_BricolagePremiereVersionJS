'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-22 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1150';
    this._commitGIT = '1375c718e5e3b8ff7bf4ff75a96105945fe0a656';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}