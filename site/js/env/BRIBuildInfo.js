'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-10 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1958';
    this._commitGIT = 'ce4f2671516bc29d4e08ade7857f230867bb9813';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}