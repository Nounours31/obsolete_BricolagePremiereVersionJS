'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-01 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1802';
    this._commitGIT = 'da23ab9b86a351380a60e1c8dd60aa4ddf9c55d1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}