'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-05 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-2179';
    this._commitGIT = 'e685fc6d1fbcbccf18adcce55f720c832b03b957';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}