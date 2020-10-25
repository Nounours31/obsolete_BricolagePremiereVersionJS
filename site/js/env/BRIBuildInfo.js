'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-25 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2016';
    this._commitGIT = 'ce629acb41afafd7204b855bff4af70bb42858ba';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}