'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-10 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1467';
    this._commitGIT = '9ca9fc5b50606a1f68d0dd2aa6355188b437f7d6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}