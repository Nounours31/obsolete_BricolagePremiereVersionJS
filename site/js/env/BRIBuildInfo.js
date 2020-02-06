'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-06 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-969';
    this._commitGIT = '2c482c8e434582de09c934b6572574349b4943eb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}