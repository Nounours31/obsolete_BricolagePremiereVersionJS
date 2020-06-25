'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-25 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1527';
    this._commitGIT = '689009d2e1923e7fd157afc147fca05b4b31cd78';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}