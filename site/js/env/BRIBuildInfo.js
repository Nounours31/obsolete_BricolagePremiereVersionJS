'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-13 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-872';
    this._commitGIT = 'ce9a05c9366436c813e7bcf80301451f4ba5e39e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}