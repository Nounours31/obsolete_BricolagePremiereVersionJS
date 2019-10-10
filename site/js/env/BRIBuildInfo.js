'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-10 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-493';
    this._commitGIT = 'ec6e266acb8910c95cdefc69090e421668da589c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}