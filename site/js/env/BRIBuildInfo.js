'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-08 12:00:15';
    this._versionBuild = 'jenkins-Bricolage-240';
    this._commitGIT = 'e4f07e3ad9c42ef42f1dc27fdfa71cf7bff3c39c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}