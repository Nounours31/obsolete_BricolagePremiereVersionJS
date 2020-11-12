'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-12 12:00:10';
    this._versionBuild = 'jenkins-Bricolage-2088';
    this._commitGIT = '915ba174535539511cd79761cad0d59859bf2b8e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}