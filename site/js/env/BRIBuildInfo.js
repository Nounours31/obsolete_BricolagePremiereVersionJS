'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-13 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1113';
    this._commitGIT = '59f8d05c1ce65514d0684200a947b8501a481b1d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}