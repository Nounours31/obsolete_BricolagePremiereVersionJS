'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-23 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1395';
    this._commitGIT = '73c32c8cfedec276ba8009d887bee604589ca1b4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}