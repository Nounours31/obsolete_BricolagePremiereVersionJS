'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-29 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-937';
    this._commitGIT = '340cb2c82052874671f1248d43a45c8c362301df';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}