'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-04 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1811';
    this._commitGIT = '2eb1e15c047fcaedba0c518a2d174dd763dc6775';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}