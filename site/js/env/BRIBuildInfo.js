'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-28 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-688';
    this._commitGIT = 'dc57176814b832f80e56a10aee7abc04bd40b1b3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}