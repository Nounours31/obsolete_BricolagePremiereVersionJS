'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-28 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1055';
    this._commitGIT = '17a01e6c07e8b661b31b1ac7ce4d89807fdbde32';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}