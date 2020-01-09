'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-09 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-857';
    this._commitGIT = '7c1e97e9759ddaf60a727c640ca508e7720359ec';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}