'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-27 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1655';
    this._commitGIT = '27faca1f48c5086fda6ad4da9a6af30af1041cc2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}