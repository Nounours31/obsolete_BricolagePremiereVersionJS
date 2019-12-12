'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-12 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-746';
    this._commitGIT = '6e634955f56f69883f73a2faa5d9c086c0156d90';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}