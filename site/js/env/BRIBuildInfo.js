'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-31 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-2039';
    this._commitGIT = '4d33a184c0d43e08c82417c0a15d35a93d050127';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}