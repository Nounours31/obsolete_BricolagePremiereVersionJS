'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-13 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1723';
    this._commitGIT = '82300ab504f12c12ae76ab48f865ec4d93c6b21f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}