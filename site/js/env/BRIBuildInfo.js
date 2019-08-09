'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-09 08:00:15';
    this._versionBuild = 'jenkins-Bricolage-243';
    this._commitGIT = '94cd9f298f9a3a50ce9b714f789798c1680c6c58';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}