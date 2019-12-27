'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-27 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-804';
    this._commitGIT = 'fef0637e0bec2851a93cb33f0a2507a25521f5f1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}