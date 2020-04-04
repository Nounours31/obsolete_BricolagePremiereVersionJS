'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-04 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-1201';
    this._commitGIT = '571f12695b41ba218b6cab46560b9b3619412f58';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}