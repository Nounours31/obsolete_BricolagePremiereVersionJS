'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-27 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1904';
    this._commitGIT = '307c7e0d71b792e8e4b55c2c47a14f5109712e8d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}