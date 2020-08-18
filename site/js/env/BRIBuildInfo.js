'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-18 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1745';
    this._commitGIT = '59b268e04c19e5f4a266fde554e6b99fabc1ee6d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}