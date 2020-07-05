'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-05 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1567';
    this._commitGIT = 'c5a9644651e7b58d993e6a23b1fbb8a65f779591';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}