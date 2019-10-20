'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-20 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-532';
    this._commitGIT = '3d81c6fdf29112325f9af2c13da2cdafbcd22aac';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}