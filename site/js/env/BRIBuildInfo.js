'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-07 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1823';
    this._commitGIT = 'e7b0e46621e74ae1a4fcbd62770a0021ce116619';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}