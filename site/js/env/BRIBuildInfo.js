'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-24 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-427';
    this._commitGIT = 'e10f571e40f1c231318fca627d9287993cf01953';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}