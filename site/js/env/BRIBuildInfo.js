'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-16 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1491';
    this._commitGIT = '64ce6e2610c80a222d1d5e3059adbfd635b62f80';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}