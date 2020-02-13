'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-13 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-996';
    this._commitGIT = '8d3d36a0b3bde2c110a9afa89a14a7ca652ebeb5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}