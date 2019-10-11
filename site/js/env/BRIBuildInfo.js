'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-11 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-496';
    this._commitGIT = '8f29b6f5db0a8294d92c41f9edf25abdf5ea20c2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}