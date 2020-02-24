'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-24 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1039';
    this._commitGIT = '2cb681a88a9b4b1fbdae91586bb538e4b4fc2215';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}