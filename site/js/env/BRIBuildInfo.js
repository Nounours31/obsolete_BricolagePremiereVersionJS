'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-26 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2146';
    this._commitGIT = 'de8dcb63d21e6c7790df9f4351b1d8aa4b8a2096';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}