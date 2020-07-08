'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-08 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1582';
    this._commitGIT = '6b3660b894f01dde313697c533657d59d987a566';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}