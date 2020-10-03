'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-03 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1927';
    this._commitGIT = 'c6b0c6d42f4be28cd1a4058b259650cf7042f1d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}