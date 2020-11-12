'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-12 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-2089';
    this._commitGIT = '1c81de95f0f268961efe44fe1ae3249af28000ff';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}