'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-27 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-686';
    this._commitGIT = '62f2cf55c37a17df47ba66d7508aa7aab824fca4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}