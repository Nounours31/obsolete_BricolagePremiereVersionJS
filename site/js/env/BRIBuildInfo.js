'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:10:22';
    this._versionBuild = 'jenkins-Bricolage-101';
    this._commitGIT = '21aeb9e391a16e4fe762018fcc6c3e0b7303f989';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}