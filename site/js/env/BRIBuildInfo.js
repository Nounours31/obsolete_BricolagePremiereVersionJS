'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-28 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1417';
    this._commitGIT = 'cec5cab1568bf44afe83a608539ed8c9a185cf7c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}