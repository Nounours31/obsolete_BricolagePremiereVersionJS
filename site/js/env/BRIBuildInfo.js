'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-15 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-637';
    this._commitGIT = '221b87af4609e97f1254128044492a79885d82ea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}