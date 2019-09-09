'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-09 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-368';
    this._commitGIT = '76e51ae78738d2b15749a0b6e21815e54890a4d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}