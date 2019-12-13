'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-13 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-747';
    this._commitGIT = '2d0f4fb5e309e66c04fe5c62100810a9b96d45d6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}