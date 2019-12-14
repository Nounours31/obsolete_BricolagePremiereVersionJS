'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-14 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-752';
    this._commitGIT = 'a19df45321a4af96489b7e2d836a86465424e068';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}