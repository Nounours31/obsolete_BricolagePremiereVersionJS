'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-29 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1302';
    this._commitGIT = 'f429b339abf71cb4a0c143089afd6beda3dcc479';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}