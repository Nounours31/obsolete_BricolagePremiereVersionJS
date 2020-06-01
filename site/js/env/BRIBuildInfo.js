'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-01 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1433';
    this._commitGIT = 'd37cc0dae7e291d680a8206d571f12b356ee9f40';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}