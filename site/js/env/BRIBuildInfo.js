'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-06 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-356';
    this._commitGIT = '71cd52f487827b061749f5fe1201c2fdf6da3bf1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}