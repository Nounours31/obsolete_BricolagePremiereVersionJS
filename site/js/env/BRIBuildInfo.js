'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-09 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1585';
    this._commitGIT = '72bddc8e583212c61d552e658e3d9ac363b53ba2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}