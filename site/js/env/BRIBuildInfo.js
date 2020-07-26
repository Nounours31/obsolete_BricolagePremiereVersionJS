'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-26 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1651';
    this._commitGIT = '81df17a6e27b59ec05a8c741b661376a2898681c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}