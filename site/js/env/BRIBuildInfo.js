'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-17 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-400';
    this._commitGIT = 'dc58b16453cb876fef00866cf7b8164643db4566';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}