'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-06 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-2065';
    this._commitGIT = 'e5519f54f27d1d37ca74b8e7b8da386e670ab750';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}