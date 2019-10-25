'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-25 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-551';
    this._commitGIT = 'a6ae898e7ec0f903d5b6b285fc57a96d3757cba0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}