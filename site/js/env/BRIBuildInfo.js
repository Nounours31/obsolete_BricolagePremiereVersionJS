'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-26 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1653';
    this._commitGIT = 'dd695dc3b5b0eee136d08835cb39bb8e82f51905';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}