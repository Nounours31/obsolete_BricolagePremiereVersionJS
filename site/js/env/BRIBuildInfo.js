'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-15 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2101';
    this._commitGIT = '2f50380ac3d3e63043019fcd14661961bd7dd4a5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}