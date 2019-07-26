'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-26 08:00:12';
    this._versionBuild = 'jenkins-Bricolage-187';
    this._commitGIT = '5285342d228abc10e824c7670cdf4eef2965f7ec';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}