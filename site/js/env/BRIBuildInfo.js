'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-14 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2096';
    this._commitGIT = '8235609ee804bd0f8ad8c644015588d0746678f4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}