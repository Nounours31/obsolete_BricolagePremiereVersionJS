'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-06 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1329';
    this._commitGIT = '52615df28a6fec92cee946f320e91e0bf7e0e03d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}