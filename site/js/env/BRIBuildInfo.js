'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-27 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-192';
    this._commitGIT = 'c5402833ba52a005a23c99d728fcfbd3c3091eca';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}