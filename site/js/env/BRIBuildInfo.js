'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-20 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1140';
    this._commitGIT = '95320e51287f6be782b032085b20c1cab098122d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}