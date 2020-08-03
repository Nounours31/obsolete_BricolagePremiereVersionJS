'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-03 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1683';
    this._commitGIT = 'cd0a03544b988ec1d57269b7a6546ba8d0527073';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}