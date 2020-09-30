'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-30 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1917';
    this._commitGIT = 'e4cb88013c3b77231553df99a4b722f4212d669f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}