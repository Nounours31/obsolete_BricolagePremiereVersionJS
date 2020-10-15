'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-15 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1975';
    this._commitGIT = '79459db811de38ef86f1134972deaa0f6540af3d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}