'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-30 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-1668';
    this._commitGIT = 'd07d4909f84c17797a24c7333866e5df16e440d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}