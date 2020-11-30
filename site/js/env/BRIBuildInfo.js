'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-30 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2161';
    this._commitGIT = '212a9453cc9399eea2497bc8500dbacc1a7ddba8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}