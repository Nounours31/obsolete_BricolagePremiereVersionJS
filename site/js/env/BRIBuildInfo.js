'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-24 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1400';
    this._commitGIT = 'cbd5d93ef5881c7fa7f1baa12e358ccf2875770c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}