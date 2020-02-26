'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-26 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1048';
    this._commitGIT = '6588715544c5d0d65f00318efe017b4ed442eb60';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}