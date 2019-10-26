'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-26 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-557';
    this._commitGIT = '72541268a0906652694898f10f2a0cae7593d992';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}