'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-08 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1948';
    this._commitGIT = 'e7588a79a66b2d8a812214ec8e1b540c5d1d03ff';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}