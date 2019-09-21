'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-21 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-416';
    this._commitGIT = '542bcf7da9b61b6d8235c93d04e5d0a325c5fe7a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}