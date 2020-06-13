'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-13 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1481';
    this._commitGIT = '67b3b52dbf9580c145c1fc0fe20d959cec2d8b6e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}