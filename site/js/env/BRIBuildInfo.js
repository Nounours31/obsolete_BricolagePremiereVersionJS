'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-19 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1873';
    this._commitGIT = '13a752d233f4cbfa0bd4cb9d46665be5326ce4f8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}