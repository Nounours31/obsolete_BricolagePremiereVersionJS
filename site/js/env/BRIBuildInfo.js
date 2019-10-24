'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-24 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-548';
    this._commitGIT = 'ebc59c76a5497fe5de4f002a0436a910adae9780';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}