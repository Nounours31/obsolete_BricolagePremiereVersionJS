'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-16 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1982';
    this._commitGIT = '8d37b97dc35a44655965cb3a0ef9b3c7cd01e64c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}