'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-17 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1128';
    this._commitGIT = '7f707fb7c892a3112fb6c8aff5ab7d19215befa1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}