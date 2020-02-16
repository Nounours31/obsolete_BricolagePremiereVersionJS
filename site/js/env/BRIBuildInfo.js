'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-16 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1007';
    this._commitGIT = '24caef0d8b8f7646599d95ec7e97e4f7b6b087f4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}