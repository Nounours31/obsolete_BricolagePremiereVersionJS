'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-19 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1260';
    this._commitGIT = 'c52e96524b7a52878c9d03b936e55eecfb9c4c5b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}