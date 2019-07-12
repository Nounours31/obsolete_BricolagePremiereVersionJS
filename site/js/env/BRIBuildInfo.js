'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:43:07';
    this._versionBuild = 'jenkins-Bricolage-110';
    this._commitGIT = '545fa5f2c525127d3fbf135aac0735af282da8d2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}