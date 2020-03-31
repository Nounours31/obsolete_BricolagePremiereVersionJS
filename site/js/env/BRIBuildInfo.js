'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-31 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1185';
    this._commitGIT = 'd903e9f6f93f8db12c28f547ea36b63b71848793';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}