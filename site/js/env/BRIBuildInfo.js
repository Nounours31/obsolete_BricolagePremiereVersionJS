'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-22 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-295';
    this._commitGIT = 'b10a570e598c9b3545a3db73b2b6b9b3f998e149';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}