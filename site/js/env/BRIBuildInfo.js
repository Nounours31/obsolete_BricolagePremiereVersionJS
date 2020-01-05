'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-05 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-842';
    this._commitGIT = 'adde8b7ee42bf5a8853b1f56f24d8c53e866c6e7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}