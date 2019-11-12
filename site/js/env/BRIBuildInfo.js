'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-12 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-625';
    this._commitGIT = '6a28cccde692361c4b81ce77f7996baca2d26f55';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}