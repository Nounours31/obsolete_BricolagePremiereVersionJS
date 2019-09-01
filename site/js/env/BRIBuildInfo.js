'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-01 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-338';
    this._commitGIT = '8d52168e4ea30c53f8912d84b74d48be0b98477b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}