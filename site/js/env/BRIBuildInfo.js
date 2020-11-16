'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-16 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-2105';
    this._commitGIT = '982e11be0c2a8349acc1e9f74ad6e13b0ee3e88a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}