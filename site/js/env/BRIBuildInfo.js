'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-31 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1184';
    this._commitGIT = 'de107351783987dfb7fdc4e4c07e860931a5e0b0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}