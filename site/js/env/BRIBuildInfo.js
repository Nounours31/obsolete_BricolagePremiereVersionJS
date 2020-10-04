'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-04 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1934';
    this._commitGIT = '1a51575cb2b0c2db46a86ba0912228e795c3fa6b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}