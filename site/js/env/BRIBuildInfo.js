'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-03 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2053';
    this._commitGIT = 'd2796157c19dc105a3b288e0af3d6469c4f530ff';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}