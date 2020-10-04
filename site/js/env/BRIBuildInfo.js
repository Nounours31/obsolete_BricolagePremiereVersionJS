'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-04 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1931';
    this._commitGIT = 'd09f60342d10bfc6c4205967aac1740123327c23';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}