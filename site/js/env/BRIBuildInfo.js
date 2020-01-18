'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-18 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-891';
    this._commitGIT = '8bf37c583ed6273a419b7339e88749b6d6b896cd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}