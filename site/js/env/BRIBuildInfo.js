'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-11 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1960';
    this._commitGIT = '5c8394289acc2886b83f35e0288c49f1613bf079';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}