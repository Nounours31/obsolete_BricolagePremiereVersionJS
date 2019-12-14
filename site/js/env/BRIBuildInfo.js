'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-14 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-754';
    this._commitGIT = 'f241072562d7a7a0e826b8cfff658e1473217b17';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}