'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-17 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1371';
    this._commitGIT = '67970053e15a061bb82abeb4106d1faea21c6a77';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}