'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-05 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1936';
    this._commitGIT = '10c6b25a98f0122ae780771c6cb4962efa7fc05d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}