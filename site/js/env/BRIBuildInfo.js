'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-06 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1328';
    this._commitGIT = '451b105355d8c8f6120d4dcfc8097e23f6160dc8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}