'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-15 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1978';
    this._commitGIT = 'dd865d630666a46375695b4fed8f96d688666ec7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}