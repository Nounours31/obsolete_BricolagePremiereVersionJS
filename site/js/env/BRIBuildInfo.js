'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-31 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-944';
    this._commitGIT = '1cc2541e3447aea6e02eac8c96ae3cae8082b77e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}