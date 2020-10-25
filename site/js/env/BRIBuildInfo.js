'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-25 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2018';
    this._commitGIT = 'bbced837c0b92e8b7eb97f67675eebc55b3185d2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}