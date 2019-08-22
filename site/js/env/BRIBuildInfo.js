'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-22 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-296';
    this._commitGIT = 'fe564e58d40d3a0990c4de70cffe77aeb70190d4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}