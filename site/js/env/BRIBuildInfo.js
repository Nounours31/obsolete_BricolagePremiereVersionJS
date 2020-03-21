'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-21 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1146';
    this._commitGIT = '647d5e4809d87ed220c004bad217049c807b8598';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}