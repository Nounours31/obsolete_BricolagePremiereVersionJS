'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-14 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1361';
    this._commitGIT = '7889e5ebf3fda34e54a6b100c8c9067da276bff7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}