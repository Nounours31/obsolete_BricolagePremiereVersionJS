'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-05 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1450';
    this._commitGIT = 'b36d95d86950e60cce1db176541eb7cd6cf7d848';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}