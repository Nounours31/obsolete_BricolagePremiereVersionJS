'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-19 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-895';
    this._commitGIT = '7e206b32a882cff752281fa489e38238de295797';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}