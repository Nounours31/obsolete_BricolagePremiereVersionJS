'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-09 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1953';
    this._commitGIT = '529f3d030daceeda73bb3522c212d9707edd4632';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}