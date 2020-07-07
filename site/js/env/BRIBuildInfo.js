'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-07 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1575';
    this._commitGIT = 'd3c96cd1613b7b2d1b0b4db9cd3c66d511517adf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}