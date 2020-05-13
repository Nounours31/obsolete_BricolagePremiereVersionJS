'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-13 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1357';
    this._commitGIT = '472a7726756d65fd63cd2b78ccfebaebfad1e306';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}