'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-05 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-839';
    this._commitGIT = '71e0ead2eee70f478d3eb0ad8f0ddcdacc12059b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}