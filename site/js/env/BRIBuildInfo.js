'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-04 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-468';
    this._commitGIT = '162cb74bd5282f92eec4e79d6d3d16badf2d7c51';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}