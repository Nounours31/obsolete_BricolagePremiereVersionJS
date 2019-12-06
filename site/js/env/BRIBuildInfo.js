'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-06 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-722';
    this._commitGIT = '21107b3b725e12c0af91bbbddc33f7e86e69ea81';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}