'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-15 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-391';
    this._commitGIT = '755965eb38d2207576b3c03321301d7bb6905708';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}