'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-08 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1830';
    this._commitGIT = 'e5d89d257bf2ccceab74e1cc1a7599229e530f4d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}