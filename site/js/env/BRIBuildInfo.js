'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-01 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1310';
    this._commitGIT = '783052eada7329b805c6aed31900f43f57330eba';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}