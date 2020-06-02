'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-02 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1437';
    this._commitGIT = '30312cfbfb7b561030482e086c13063299d1f299';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}