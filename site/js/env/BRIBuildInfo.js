'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-22 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1273';
    this._commitGIT = '54516eee9d626a146c39612a0e2a10bc70ee707e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}