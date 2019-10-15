'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-15 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-514';
    this._commitGIT = 'c27326feaeb9305c532398f21d5ef7c91f6cc353';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}