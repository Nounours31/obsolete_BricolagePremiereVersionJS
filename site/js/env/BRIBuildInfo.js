'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-19 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-898';
    this._commitGIT = '950248c8f4e0946e354d80b4a12c4fa3f107ac1d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}