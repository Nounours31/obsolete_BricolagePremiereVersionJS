'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-13 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1358';
    this._commitGIT = '248d170ab373ac3000d5fdda80604135b9f8e5c2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}