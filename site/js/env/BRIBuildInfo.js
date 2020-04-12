'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-12 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1234';
    this._commitGIT = '2fc02dfe03e39ae13bd8dbf5ff723b2ddf8224e5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}