'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-08 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1461';
    this._commitGIT = 'c7f4fa14d486cf16a8ef8760eeb1cc3f6c6cba29';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}