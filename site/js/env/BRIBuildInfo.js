'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-21 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-782';
    this._commitGIT = '8346483701701334bd02f1bc2625c1bf4fa8b38f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}