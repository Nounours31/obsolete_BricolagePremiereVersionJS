'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-25 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1160';
    this._commitGIT = '16ebc2cc9a62c120bb7ae108d88f4d1d968dd76f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}