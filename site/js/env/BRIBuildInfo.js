'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-16 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-761';
    this._commitGIT = '10b50302e7d93d5c6ec0cc192c5ee4460341d226';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}