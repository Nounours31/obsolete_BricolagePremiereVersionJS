'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-20 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1754';
    this._commitGIT = '696eb6ef39b6ef6ee7d2e6b2b6dfbc6522e03611';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}