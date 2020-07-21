'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-21 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1631';
    this._commitGIT = 'e308ba2137c68e763febfb963bda7bf9ad43ce61';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}