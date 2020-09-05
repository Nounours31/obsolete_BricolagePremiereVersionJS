'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-05 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1815';
    this._commitGIT = '30bed422813ea3af0c8914d6ee6388f5cd2a1450';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}