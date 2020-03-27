'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-27 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1168';
    this._commitGIT = 'aabcfd7e531920583a60dd7636186474923d8734';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}