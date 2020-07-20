'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-20 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1627';
    this._commitGIT = 'cac7a41bc0ae393d8c4c3b841cdc4e4e21cc6a61';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}