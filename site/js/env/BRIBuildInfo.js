'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-30 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-818';
    this._commitGIT = 'd3485d52a4f05d34a3fdc22bfe30d907f8eff216';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}