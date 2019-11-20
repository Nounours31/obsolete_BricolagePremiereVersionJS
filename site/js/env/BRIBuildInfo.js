'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-20 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-658';
    this._commitGIT = '1c3f6fc747975091cd86bb0b251717c7b2c77e5d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}