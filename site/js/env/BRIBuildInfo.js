'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-23 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-787';
    this._commitGIT = '065ec9cdee4e650138205b762e6c7c6f9807ad4d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}