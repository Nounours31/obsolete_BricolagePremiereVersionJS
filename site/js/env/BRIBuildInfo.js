'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-07 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1211';
    this._commitGIT = '2a36f6227899dc5db62af4d089ddefc37158dfa5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}