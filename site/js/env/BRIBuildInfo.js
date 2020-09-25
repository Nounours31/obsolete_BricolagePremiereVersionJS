'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-25 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1898';
    this._commitGIT = 'cb2860be42fb74dbc345b77fed34f8d2c5a113b6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}