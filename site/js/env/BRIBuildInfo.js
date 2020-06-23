'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-23 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1522';
    this._commitGIT = '3d945c9f66a9b498c5c3fcddc8b67587afa0529a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}