'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-14 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1239';
    this._commitGIT = 'd6f23df603e51add4df7b37f87d6178622ca1f79';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}