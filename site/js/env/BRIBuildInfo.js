'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-11 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1961';
    this._commitGIT = 'e9bb48954986996700e4726326e951d20415233a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}