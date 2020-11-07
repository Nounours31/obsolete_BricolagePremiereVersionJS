'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-07 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2070';
    this._commitGIT = 'd32bd3b13574c72d9827c427312eb50bc659d0eb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}