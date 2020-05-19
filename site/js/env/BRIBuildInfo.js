'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-19 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1379';
    this._commitGIT = '8c6579a2bc5f120665a49b941274d9404210dc18';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}