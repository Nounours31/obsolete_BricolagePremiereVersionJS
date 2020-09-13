'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-13 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1850';
    this._commitGIT = '5f87e29a8c297107cfd92baa9fcd7c29a66904d2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}