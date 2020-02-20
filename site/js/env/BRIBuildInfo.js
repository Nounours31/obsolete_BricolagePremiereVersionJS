'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-20 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1023';
    this._commitGIT = 'ea830c6acc565e7a6ce07fd5b965cb14d8b2989e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}