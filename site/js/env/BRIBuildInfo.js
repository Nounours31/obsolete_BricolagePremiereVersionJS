'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-07 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1945';
    this._commitGIT = 'd2abcc37302a48d3d5e5242eb190fca8611f005b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}