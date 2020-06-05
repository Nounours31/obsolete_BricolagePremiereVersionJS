'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-05 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1449';
    this._commitGIT = 'f39c898da6264c4687f5ec5b562902b5cb450fcf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}