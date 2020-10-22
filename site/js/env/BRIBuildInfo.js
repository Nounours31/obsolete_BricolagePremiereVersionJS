'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-22 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2004';
    this._commitGIT = 'f3094b1846eafdd0babd38f9ab890e80c10a6ac9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}