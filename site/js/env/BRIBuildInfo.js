'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-09 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1464';
    this._commitGIT = '1794c82eb894fbbc780840ccf3ddc3132da27919';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}