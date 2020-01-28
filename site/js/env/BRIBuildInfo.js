'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-28 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-931';
    this._commitGIT = '42da7931179bfd59f1d05b6c2ca4a8fd2909f85f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}