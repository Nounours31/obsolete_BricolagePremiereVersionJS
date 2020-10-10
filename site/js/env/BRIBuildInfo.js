'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-10 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1956';
    this._commitGIT = 'cff03675fae59ba62c69cb7a147e9f3a110e6e35';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}