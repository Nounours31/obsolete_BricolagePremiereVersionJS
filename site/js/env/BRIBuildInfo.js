'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-26 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1165';
    this._commitGIT = '65e4aca788eea1df67318aebae6f01d5c5f9f744';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}