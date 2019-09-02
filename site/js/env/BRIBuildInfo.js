'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-02 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-340';
    this._commitGIT = 'c3341a3701f74d885dc9cd7437f39e5a8340ab2d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}