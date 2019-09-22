'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-22 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-421';
    this._commitGIT = '085580a5d3a8ed8e4ff0aa6f2e1b4b8b73f4d723';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}