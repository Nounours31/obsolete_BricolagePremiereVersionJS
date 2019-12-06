'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-06 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-719';
    this._commitGIT = '0018fa6ad10f1cd7c642d2aca6dad4b2b83d8307';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}