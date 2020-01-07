'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-07 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-848';
    this._commitGIT = '18a291acd3640c1bcdf3db20d0f533150243d32c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}