'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-13 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-385';
    this._commitGIT = 'faa0309412a0f810ef286d745a11f074fd2e7e9e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}