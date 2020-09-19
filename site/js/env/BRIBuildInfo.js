'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-19 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1872';
    this._commitGIT = '90028b3202b6a8b603ae250b3ddf7683bf5f641e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}