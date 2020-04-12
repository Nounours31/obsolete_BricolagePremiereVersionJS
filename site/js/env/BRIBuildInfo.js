'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-12 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-1233';
    this._commitGIT = 'bff4c101b261911d68f95d0f51ea452572010dcd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}