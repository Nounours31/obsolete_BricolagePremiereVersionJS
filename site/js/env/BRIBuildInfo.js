'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-29 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2158';
    this._commitGIT = '387cba5a6b6735fb916cde2681fbcf9e39e9cdfb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}